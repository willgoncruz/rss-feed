import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Feed, Article } from '../../types/feed';
import apolloClient from '../../client/apollo-client';

type Props = {
  feed: Feed | null;
  onSelectArticle: Function;
};

const GET_ARTICLES = (url: string) => gql`
  query Articles {
    articles(url: "${url}") {
      title
    }
  }
`;

const ActiveFeed = ({ feed, onSelectArticle }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticles() {
      if (!feed) {
        return;
      }

      const { data } = await apolloClient.query({
        query: GET_ARTICLES(feed.url),
      });

      setArticles(data.articles);
    }
    getArticles();
  }, [feed]);

  if (!feed) {
    return <div>No feed selected ;-;</div>;
  }

  return (
    <div>
      <span>SELECT FEED BELOW</span>
      <div>
        {feed.url}
        {articles.map((article, i) => (
          <div key={i} onClick={() => onSelectArticle(article)}>
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFeed;
