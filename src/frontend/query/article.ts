import { gql } from '@apollo/client';

const query = (url: string) => gql`
  query Articles {
    articles(url: "${url}") {
      id
      type
      title
      author {
        name
      }
      media {
        description
        content {
          url
          type
          width
          height
        }
      }
    }
  }
`;

export default query;
