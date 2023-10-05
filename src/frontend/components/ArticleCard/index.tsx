import { ArticleType } from '@types';
import Link from 'next/link';
import React from 'react';
import BlogArticleCard from './blog';
import { ArticleCardProps } from './props';
import YoutubeArticleCard from './youtube';

interface BaseCardProps extends ArticleCardProps {
  children: React.ReactNode;
}

type ArticleCardCompoent = (props: ArticleCardProps) => JSX.Element;

const ArticleCardByType: Record<string, ArticleCardCompoent> = {
  [ArticleType.Blog]: BlogArticleCard,
  [ArticleType.Youtube]: YoutubeArticleCard,
};

const Card = ({ article }: ArticleCardProps) => {
  const Component = ArticleCardByType[article.type] || YoutubeArticleCard;
  return <Component article={article} />;
};

const ArticleLink = ({ article, children }: BaseCardProps) => (
  <Link
    href={`/feeds?articleID=${article.id}`}
    as={`/article/${article.id}`}
    scroll={false}
    style={{ display: 'inline-block' }}
  >
    {children}
  </Link>
);

const ArticleCard = ({ article }: ArticleCardProps) => (
  <ArticleLink article={article}>
    <Card article={article} />
  </ArticleLink>
);

export default ArticleCard;
