import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createCognitoAuth } from './auth/cognito'
import { createAppSyncAPI } from './api/appsync'
import { CfnGraphQLApi } from 'aws-cdk-lib/aws-appsync'
import { createEventBridge } from './choreography/eventbridge'
import { publishMsgFromEB } from './api/src/graphql/mutations'

export class ReceiveGameUpdateBackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const appName = 'eventbridge-to-appsync-broadcast'
		const defaultBusArn = `arn:aws:events:${this.region}:${this.account}:event-bus/default`

		const auth = createCognitoAuth(this, { appName })

		const api = createAppSyncAPI(this, { appName, userpool: auth.userPool })

		const cfnAPI = api.node.defaultChild as CfnGraphQLApi

		const eventBridge = createEventBridge(this, {
			defaultBusArn,
			appsyncApiArn: api.arn,
			appsyncEndpointArn: cfnAPI.attrGraphQlEndpointArn,
			graphQlOperation: publishMsgFromEB,
		})

		new cdk.CfnOutput(this, 'UserPoolId', {
			value: auth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'UserPoolClientId', {
			value: auth.userPoolClient.userPoolClientId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: auth.identityPool.identityPoolId,
		})
		//arn:aws:appsync:::apis/apiId
		new cdk.CfnOutput(this, 'GraphQLAPIURL', {
			value: api.graphqlUrl,
		})
		new cdk.CfnOutput(this, 'Region', {
			value: this.region,
		})
		new cdk.CfnOutput(this, 'appsync-api-arn', {
			value: api.arn,
		})

		//arn:aws:appsync:::endpoints/graphql-api/graphQLUrlId
		new cdk.CfnOutput(this, 'cfn-graphql-arn', {
			value: cfnAPI.attrGraphQlEndpointArn,
		})
	}
}
