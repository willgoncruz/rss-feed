import { Media } from '@types';

type Props = {
  media: Media;
};

const getEmbedUrl = (media: Media) => {
  const baseURL = media.content.url;

  const videoID = baseURL.split('/v/')[1].split('?')[0];

  return `http://www.youtube.com/embed/${videoID}`;
};

const YoutubeArticleDisplay = ({ media }: Props) => (
  <iframe
    id="ytplayer"
    width={media.content.width}
    height={media.content.height}
    src={getEmbedUrl(media)}
  />
);

export default YoutubeArticleDisplay;
