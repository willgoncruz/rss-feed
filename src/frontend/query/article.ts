import { gql } from '@apollo/client';

const query = (url: string) => gql`
  query Articles {
    articles(url: "${url}") {
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
