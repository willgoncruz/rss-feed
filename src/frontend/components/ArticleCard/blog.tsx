import { Card } from '../Card';
import Thumbnail from '../Thumbnail';
import { Description, Subtitle, Text } from '../Typography';
import { ArticleCardProps } from './props';
import { CardAuthor, CardShortContent, CardTitle } from './styles';

const BlogArticleCard = ({ article }: ArticleCardProps) => (
  <Card>
    <CardShortContent>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={320} height={180} />
      <Description>{article.title}</Description>
      <Text>Blog post by {article.author.name}</Text>
    </CardShortContent>
  </Card>
);

export default BlogArticleCard;
