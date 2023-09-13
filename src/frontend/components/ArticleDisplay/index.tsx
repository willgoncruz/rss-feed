import { Media } from '@types';
import YoutubeArticleDisplay from './youtube';

type Props = {
  media: Media;
};

const ArticleDisplay = ({ media }: Props) => <YoutubeArticleDisplay media={media} />;

export default ArticleDisplay;
