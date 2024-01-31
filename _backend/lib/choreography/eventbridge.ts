import { aws_events as events } from 'aws-cdk-lib'

import { EventBus } from 'aws-cdk-lib/aws-events'
import {
	Effect,
	PolicyDocument,
	PolicyStatement,
	Role,
	ServicePrincipal,
} from 'aws-cdk-lib/aws-iam'
import { Construct } from 'constructs'
import { GameInput } from '../api/src/API'

type EventBridgeBusProps = {
	defaultBusArn: string
	appsyncApiArn: string
	appsyncEndpointArn: string
	graphQlOperation: string
}
export const createEventBridge = (
	scope: Construct,
	props: EventBridgeBusProps
) => {
	const bus = EventBus.fromEventBusArn(scope, 'defaultBus', props.defaultBusArn)

	// Create the Policy Statement
	const policyStatement = new PolicyStatement({
		effect: Effect.ALLOW,
		actions: ['appsync:GraphQL'],
		resources: [`${props.appsyncApiArn}/types/Mutation/*`],
	})

	// Create the Role and attach the policy
	const ebRuleRole = new Role(scope, 'AppSyncInvokeRole', {
		assumedBy: new ServicePrincipal('events.amazonaws.com'),
		inlinePolicies: {
			PolicyStatement: new PolicyDocument({
				statements: [policyStatement],
			}),
		},
	})

	const mybroadcastRule = new events.CfnRule(scope, 'cfnRule', {
		eventBusName: bus.eventBusName,
		name: 'broadcastToAppSyncRule',
		eventPattern: {
			source: ['game.broadcast'],
			['detail-type']: ['GameUpdated'],
		},
		targets: [
			{
				id: 'appsyncBroadcastReceiver',
				arn: props.appsyncEndpointArn,
				roleArn: ebRuleRole.roleArn,
				appSyncParameters: {
					graphQlOperation: props.graphQlOperation,
				},
				inputTransformer: {
					inputPathsMap: {
						createdAt: '$.detail.createdAt',
						updatedAt: '$.detail.updatedAt',
						name: '$.detail.name',
						homeTeamScore: '$.detail.homeTeamScore',
						awayTeamScore: '$.detail.awayTeamScore',
						currentMessage: '$.detail.currentMessage',
						id: '$.detail.id',
					},
					inputTemplate: JSON.stringify({
						input: {
							createdAt: '<createdAt>',
							updatedAt: '<updatedAt>',
							name: '<name>',
							homeTeamScore: '<homeTeamScore>',
							awayTeamScore: '<awayTeamScore>',
							currentMessage: '<currentMessage>',
							id: '<id>',
						},
					}),
				},
			},
		],
	})

	return { bus, mybroadcastRule }
}
