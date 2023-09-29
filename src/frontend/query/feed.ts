import { gql } from '@apollo/client';

export const LIST_FEEDS = gql`
  query Feeds {
    feeds {
      id
      url
      title
    }
  }
`;

export const ADD_FEED = gql`
  mutation AddFeeds($url: String!, $title: String!) {
    AddFeed(URL: $url, Title: $title) {
      id
      url
      title
    }
  }
`;
