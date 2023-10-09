import { Article } from '@types';
import { Space } from 'antd';
import styled from 'styled-components';
import ArticleCard from '../ArticleCard';

type Props = {
  articles: Article[];
};

const Spacing = styled(Space)`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill);

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ActiveFeed = ({ articles }: Props) => (
  <>
    <h1>Articles</h1>
    <Spacing direction="vertical" size="middle">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Spacing>
  </>
);

export default ActiveFeed;
