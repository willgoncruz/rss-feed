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
      }
    }
  }
`;

export default query;
