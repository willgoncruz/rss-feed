import { Article } from '@types';
import { Space } from 'antd';
import ArticleCard from '../ArticleCard';

type Props = {
  articles: Article[];
};

const ActiveFeed = ({ articles }: Props) => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </Space>
);

export default ActiveFeed;
