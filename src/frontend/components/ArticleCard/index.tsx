import { Article } from '@types';
import { Card as AntdCard } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  article: Article;
};

const CardContent = styled.div`
  margin-left: 256px;
`;

const StyledImage = styled(Image)`
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 10px;
`;

const Card = ({ article }: Props) => (
  <AntdCard
    bordered={false}
    style={{ width: 960, height: 192 }}
    bodyStyle={{ height: 192, overflow: 'hidden' }}
  >
    <StyledImage alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
    <CardContent>
      <h3 style={{ margin: 0 }}>{article.title}</h3>
      <h6>A video by {article.author.name}</h6>
      <span>{article.media.description}</span>
    </CardContent>
  </AntdCard>
);

const ArticleCard = ({ article }: Props) => <Card article={article} />;

export default ArticleCard;
