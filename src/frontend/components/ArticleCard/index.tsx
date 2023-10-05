import { Article } from '@types';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import Card from '../Card';
import Thumbnail from '../Thumbnail';
import { ArticleDescription, CardAuthor, CardContent, CardTitle } from './styles';

type Props = {
  article: Article;
};

interface BaseCardProps extends Props {
  children: React.ReactNode;
}

const stripHTML = (content: string) => content.replace(/(<([^>]+)>)/gi, '');

const BaseArticleCard = ({ article, children }: BaseCardProps) => (
  <Card>
    <Link href={`/feeds?articleID=${article.id}`} as={`/article/${article.id}`} scroll={false}>
      {children}
    </Link>
  </Card>
);

const ArticleCard = ({ article }: Props) => (
  <BaseArticleCard article={article}>
    <CardContent>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
      <CardTitle>{article.title}</CardTitle>
      <CardAuthor>A video by {article.author.name}</CardAuthor>
      <ArticleDescription>{stripHTML(article.media.description)}</ArticleDescription>
    </CardContent>
  </BaseArticleCard>
);

export default ArticleCard;
