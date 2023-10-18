import { LongCard } from '../Card';
import Thumbnail from '../Thumbnail';
import { Paragraph, Subtitle } from '../Typography';
import { ArticleCardProps } from './props';
import { ArticleDescription, CardContent } from './styles';

const stripHTML = (content: string) => content.replace(/(<([^>]+)>)/gi, '');

const YoutubeArticleCard = ({ article }: ArticleCardProps) => (
  <LongCard>
    <CardContent>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
      <Subtitle>{article.title}</Subtitle>
      <Paragraph>A video by {article.author.name}</Paragraph>
      <ArticleDescription>{stripHTML(article.media.description)}</ArticleDescription>
    </CardContent>
  </LongCard>
);

export default YoutubeArticleCard;
