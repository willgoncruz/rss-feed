import { Article } from '@types';

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => <span>{article.title}</span>;

export default ArticleCard;
