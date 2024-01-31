/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const publishMsgFromEB = /* GraphQL */ `mutation PublishMsgFromEB($input: GameInput!) {
  publishMsgFromEB(input: $input) {
    id
    createdAt
    updatedAt
    name
    homeTeamScore
    awayTeamScore
    currentMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PublishMsgFromEBMutationVariables,
  APITypes.PublishMsgFromEBMutation
>;
