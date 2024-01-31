/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type GameInput = {
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  homeTeamScore: number,
  awayTeamScore: number,
  currentMessage: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  homeTeamScore: number,
  awayTeamScore: number,
  currentMessage: string,
};

export type PublishMsgFromEBMutationVariables = {
  input: GameInput,
};

export type PublishMsgFromEBMutation = {
  publishMsgFromEB:  {
    __typename: "Game",
    id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    homeTeamScore: number,
    awayTeamScore: number,
    currentMessage: string,
  },
};

export type NoopQueryVariables = {
};

export type NoopQuery = {
  noop?: string | null,
};

export type OnPublishMsgFromEbSubscriptionVariables = {
};

export type OnPublishMsgFromEbSubscription = {
  onPublishMsgFromEb?:  {
    __typename: "Game",
    id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    homeTeamScore: number,
    awayTeamScore: number,
    currentMessage: string,
  } | null,
};
