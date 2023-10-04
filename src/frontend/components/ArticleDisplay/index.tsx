import React from 'react';
import { ArticleType } from '@types';
import { ArticleDisplayProps } from './props';

import BlogArticleDisplay from './blog';
import YoutubeArticleDisplay from './youtube';

const ArticleComponentByType = {
  [ArticleType.Blog]: BlogArticleDisplay,
  [ArticleType.Youtube]: YoutubeArticleDisplay,
};

const getArticleByType = (type: ArticleType) => ArticleComponentByType[type] || BlogArticleDisplay;

const ArticleDisplay = ({ type, media }: ArticleDisplayProps) => {
  const component = getArticleByType(type);
  return <div>{React.createElement(component, { media })}</div>;
};

export default ArticleDisplay;
