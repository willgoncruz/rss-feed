export enum ArticleType {
  Blog = "blog",
  Youtube = "youtube",
};

export type Article = {
  __typename?: 'Article';
  author: Author;
  id: string;
  link: string;
  media: Media;
  published: string;
  title: string;
  updated: string;
  type: ArticleType;
};

export type Author = {
  __typename?: 'Author';
  name: string;
  uri: string;
};

export type Community = {
  __typename?: 'Community';
  starRating: StarRating;
  statistics: Statistics;
};

export type Content = {
  __typename?: 'Content';
  height: number;
  type: string;
  url: string;
  width: number;
};

export type Feed = {
  __typename?: 'Feed';
  author: Author;
  id: string;
  link: string;
  published: string;
  title: string;
  url: string;
};

export type Media = {
  __typename?: 'Media';
  // community: Community;
  content: Content;
  description: string;
  thumbnail: Thumbnail;
  title: string;
};

export type StarRating = {
  __typename?: 'StarRating';
  average: number;
  count: number;
  max: number;
  min: number;
};

export type Statistics = {
  __typename?: 'Statistics';
  views: number;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  height: number;
  url: string;
  width: number;
};
