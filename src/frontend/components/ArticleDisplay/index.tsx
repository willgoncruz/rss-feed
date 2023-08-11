import { Media } from '@types';
import YoutubeArticleDisplay from './youtube';

type Props = {
  media: Media;
};

const ArticleDisplay = ({ media }: Props) => (
  <div>
    <YoutubeArticleDisplay media={media} />
  </div>
);

export default ArticleDisplay;
