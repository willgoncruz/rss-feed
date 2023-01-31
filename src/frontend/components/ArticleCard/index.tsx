import { Article } from '@types';

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => (
  <div>
    <h3>{article.title}</h3>
    <h4>A video by {article.author.name}</h4>
  </div>
);

export default ArticleCard;
