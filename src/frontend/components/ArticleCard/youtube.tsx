import { LongCard } from '../Card';
import Thumbnail from '../Thumbnail';
import { ArticleCardProps } from './props';
import { ArticleDescription, CardAuthor, CardContent, CardTitle } from './styles';

const stripHTML = (content: string) => content.replace(/(<([^>]+)>)/gi, '');

const YoutubeArticleCard = ({ article }: ArticleCardProps) => (
  <LongCard>
    <CardContent>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
      <CardTitle>{article.title}</CardTitle>
      <CardAuthor>A video by {article.author.name}</CardAuthor>
      <ArticleDescription>{stripHTML(article.media.description)}</ArticleDescription>
    </CardContent>
  </LongCard>
);

export default YoutubeArticleCard;
