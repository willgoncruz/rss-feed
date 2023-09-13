import { ArticleType } from '@types';
import React from 'react';
import { ArticleDisplayProps } from './props';
import YoutubeArticleDisplay from './youtube';

const ArticleComponentByType = {
  [ArticleType.Youtube]: YoutubeArticleDisplay,
};

const getArticleByType = (type: ArticleType) => {
  const component = ArticleComponentByType[type];

  if (!component) {
    return YoutubeArticleDisplay;
  }

  return component;
};

const ArticleDisplay = ({ type, media }: ArticleDisplayProps) => {
  const component = getArticleByType(type);
  return <div>{React.createElement(component, { media })}</div>;
};

export default ArticleDisplay;
