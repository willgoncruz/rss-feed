import { Article } from '@types';
import Head from 'next/head';
import React from 'react';
import ArticleDisplay from '../ArticleDisplay';

type Props = {
  article?: Article;
};

const ArticleSelected = ({ article }: Props) => {
  if (!article) {
    return <div>No article selected ;-;</div>;
  }

  return (
    <div>
      <h1>ARTICLE SELECTED</h1>
      <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} key="title" />
      </Head>
      <h2>
        {article.title} - by {article.author.name}
      </h2>
      <div>
        <b>Content TYPE:</b> {article.media.content.type}
      </div>
      <div>
        <b>Content URL:</b> {article.media.content.url}
      </div>
      <div>
        Article DISPLAY BELLOW
        <ArticleDisplay type={article.type} media={article.media} />
      </div>
    </div>
  );
};

export default ArticleSelected;
