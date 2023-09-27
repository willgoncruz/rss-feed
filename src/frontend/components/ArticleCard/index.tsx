import { Article } from '@types';
import { Card as AntdCard } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import Thumbnail from '../Thumbnail';

type Props = {
  article: Article;
};

const CardContent = styled.div`
  margin-left: 256px;
`;

const ArticleDescription = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardAuthor = styled.h5`
  margin-top: 0;
`;

const Card = ({ article }: Props) => (
  <AntdCard
    bordered={false}
    style={{ width: 960, height: 192 }}
    bodyStyle={{ height: 192, overflow: 'hidden' }}
  >
    <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
    <CardContent>
      <CardTitle>{article.title}</CardTitle>
      <CardAuthor>A video by {article.author.name}</CardAuthor>
      <ArticleDescription>{article.media.description}</ArticleDescription>
    </CardContent>
  </AntdCard>
);

const ArticleCard = ({ article }: Props) => (
  <Link href={`/feeds/?articleID=${article.id}`} as={`/article/${article.id}`} scroll={false}>
    <Card article={article} />
  </Link>
);

export default ArticleCard;
