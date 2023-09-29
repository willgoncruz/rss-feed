import { Article } from '@types';
import Link from 'next/link';
import Card from '../Card';
import Thumbnail from '../Thumbnail';
import { ArticleDescription, CardAuthor, CardContent, CardTitle } from './styles';

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => (
  <Card>
    <Link href={`/feeds?articleID=${article.id}`} as={`/article/${article.id}`} scroll={false}>
      <Thumbnail alt="Card Thumbnail" src={article.media.thumbnail.url} width={240} height={180} />
      <CardContent>
        <CardTitle>{article.title}</CardTitle>
        <CardAuthor>A video by {article.author.name}</CardAuthor>
        <ArticleDescription>{article.media.description}</ArticleDescription>
      </CardContent>
    </Link>
  </Card>
);

export default ArticleCard;
