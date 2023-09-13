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

export enum ArticleType {
  Youtube = "youtube",
};

export type Article = {
  __typename?: 'Article';
  author: Author;
  channelId: Scalars['String'];
  id: Scalars['String'];
  link: Scalars['String'];
  media: Media;
  published: Scalars['String'];
  title: Scalars['String'];
  updated: Scalars['String'];
  videoId: Scalars['String'];
  type: ArticleType;
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type Community = {
  __typename?: 'Community';
  starRating: StarRating;
  statistics: Statistics;
};

export type Content = {
  __typename?: 'Content';
  height: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Feed = {
  __typename?: 'Feed';
  author: Author;
  channelId: Scalars['String'];
  id: Scalars['String'];
  link: Scalars['String'];
  published: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  // community: Community;
  content: Content;
  description: Scalars['String'];
  thumbnail: Thumbnail;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  articles?: Maybe<Array<Maybe<Article>>>;
  feeds?: Maybe<Array<Maybe<Feed>>>;
};


export type QueryArticlesArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type StarRating = {
  __typename?: 'StarRating';
  average: Scalars['Float'];
  count: Scalars['Int'];
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Statistics = {
  __typename?: 'Statistics';
  views: Scalars['Int'];
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};
