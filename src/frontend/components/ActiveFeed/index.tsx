import { Feed } from '@types';
import { Space } from 'antd';
import ArticleCard from '../ArticleCard';
import { useArticles } from '../../hooks/articles';

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
      <div>{feed.url}</div>
      <div>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {articles.map((article) => (
            <div key={article.id} onClick={() => onSelectArticle(article)}>
              <ArticleCard article={article} />
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default ActiveFeed;
