import { Article } from '@types';
import { Space } from 'antd';
import ArticleCard from '../ArticleCard';

type Props = {
  articles: Article[];
};

const ActiveFeed = ({ articles }: Props) => (
  <>
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', margin: '0 auto', width: 'fit-content' }}
    >
      <h1>Articles</h1>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Space>
  </>
);

export default ActiveFeed;
