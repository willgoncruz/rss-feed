export enum ArticleType {
  Youtube = "youtube",
};

export type Article = {
  __typename?: 'Article';
  author: Author;
  id: String;
  link: String;
  media: Media;
  published: String;
  title: String;
  updated: String;
  type: ArticleType;
};

export type Author = {
  __typename?: 'Author';
  name: String;
  uri: String;
};

export type Community = {
  __typename?: 'Community';
  starRating: StarRating;
  statistics: Statistics;
};

export type Content = {
  __typename?: 'Content';
  height: number;
  type: String;
  url: String;
  width: number;
};

export type Feed = {
  __typename?: 'Feed';
  author: Author;
  id: String;
  link: String;
  published: String;
  title: String;
  url: String;
};

export type Media = {
  __typename?: 'Media';
  // community: Community;
  content: Content;
  description: String;
  thumbnail: Thumbnail;
  title: String;
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
  url: String;
  width: number;
};
