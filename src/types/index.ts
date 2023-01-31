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

export type Article = {
  __typename?: 'Article';
  author: Author;
  title: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type Feed = {
  __typename?: 'Feed';
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  articles?: Maybe<Array<Maybe<Article>>>;
  feeds?: Maybe<Array<Maybe<Feed>>>;
};


export type QueryArticlesArgs = {
  url?: InputMaybe<Scalars['String']>;
};
