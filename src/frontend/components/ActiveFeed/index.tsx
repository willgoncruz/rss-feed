import { Feed } from '@types';
import ArticleCard from '../ArticleCard';
import useArticles from '../../hooks/articles';

type Props = {
  feed: Feed | null;
  onSelectArticle: Function;
};

const ActiveFeed = ({ feed, onSelectArticle }: Props) => {
  const articles = useArticles(feed);

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
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFeed;
