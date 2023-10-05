import { Article } from '@types';
import Head from 'next/head';
import React from 'react';
import ArticleDisplay from '../ArticleDisplay';
import { Subtitle, Title } from './styles';

type Props = {
  article: Article;
};

const ContentType = ({ article }: Props) => (
  <>
    <div>
      <b>Content TYPE:</b> {article.media.content.type}
    </div>
    <div>
      <b>Content URL:</b> {article.media.content.url}
    </div>
  </>
);

const ArticleSelected = ({ article }: Props) => {
  if (!article) {
    return <div>No article selected ;-;</div>;
  }

  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} key="title" />
      </Head>

      <Title>{article.title}</Title>
      <Subtitle>Article by {article.author.name}</Subtitle>
      <ArticleDisplay type={article.type} media={article.media} />
    </div>
  );
};

export default ArticleSelected;
