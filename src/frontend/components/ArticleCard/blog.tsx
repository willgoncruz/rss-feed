import { Card } from '../Card';
import Thumbnail from '../Thumbnail';
import { ArticleCardProps } from './props';
import { CardAuthor, CardShortContent, CardTitle } from './styles';

const BlogArticleCard = ({ article }: ArticleCardProps) => (
  <Card>
    <CardShortContent>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={320} height={180} />
      <CardTitle>{article.title}</CardTitle>
      <CardAuthor>Blog post by {article.author.name}</CardAuthor>
    </CardShortContent>
  </Card>
);

export default BlogArticleCard;
