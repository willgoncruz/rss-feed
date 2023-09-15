import { Article } from '@types';
import { Card } from 'antd';

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => (
  <Card>
    <h3>{article.title}</h3>
    <h4>A video by {article.author.name}</h4>
  </Card>
);

export default ArticleCard;
