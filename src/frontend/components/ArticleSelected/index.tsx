import { Article, ArticleType } from '@types';
import Head from 'next/head';
import React from 'react';
// import ArticleDisplay from '../ArticleDisplay';
import YoutubeArticleDisplay from '../ArticleDisplay/youtube';

type Props = {
  article?: Article;
};

const ArticleByType = {
  [ArticleType.Youtube]: YoutubeArticleDisplay,
};

const ArticleSelected = ({ article }: Props) => {
  if (!article) {
    return <div>No article selected ;-;</div>;
  }

  const { media } = article;
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
        {/* <ArticleDisplay media={article.media} /> */}
        {React.createElement(ArticleByType[article.type], { media })}
      </div>
    </div>
  );
};

export default ArticleSelected;
