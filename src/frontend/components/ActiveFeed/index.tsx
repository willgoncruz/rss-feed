import { Article, Feed } from '@types';
import { Space } from 'antd';
import styled from 'styled-components';
import ArticleCard from '../ArticleCard';
import ScrollPanel from '../ScrollPanel';
import { Title } from '../Typography';

type Props = {
  feed: Feed | null;
  loading: boolean;
  articles: Article[];
};

export const Spacing = styled(Space)`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill);

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ActiveFeed = ({ feed, articles, loading }: Props) => (
  <>
    <Title>Articles</Title>
    {feed && loading && <h2>Loading...</h2>}
    {!loading && (
      <ScrollPanel>
        <Spacing direction="vertical" size="middle">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Spacing>
      </ScrollPanel>
    )}
  </>
);

export default ActiveFeed;
