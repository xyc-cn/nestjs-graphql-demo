export type Maybe<T> = T | null;
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

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['Int'];
};

export type Feed = {
  __typename?: 'Feed';
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  feed: Feed;
};


export type QueryCommentArgs = {
  id: Scalars['Float'];
};


export type QueryFeedArgs = {
  id: Scalars['Float'];
};
