import { Media } from '@types';

type Props = {
  media: Media;
};

const BlogArticleDisplay = ({ media }: Props) => <div>Blog article {media.thumbnail.url}</div>;

export default BlogArticleDisplay;
