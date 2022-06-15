import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  AdultVideos: Array<Video>;
};


export type QueryAdultVideosArgs = {
  filter?: InputMaybe<VideoFilter>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  url: Scalars['String'];
  videoId: Scalars['String'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Thumbnail;
  url: Scalars['String'];
};

export type VideoFilter = {
  actresses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetAdultVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdultVideosQuery = { __typename?: 'Query', AdultVideos: Array<{ __typename?: 'Video', name: string, url: string, thumbnail: { __typename?: 'Thumbnail', url: string } }> };


export const GetAdultVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAdultVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AdultVideos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"actresses"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"上原亜衣","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdultVideosQuery, GetAdultVideosQueryVariables>;