import { Media } from '@types';
import styled from 'styled-components';

type Props = {
  media: Media;
};

const BlogArticle = styled.div`
  img {
    width: fill-available;
  }
`;

const BlogArticleDisplay = ({ media }: Props) => (
  <BlogArticle dangerouslySetInnerHTML={{ __html: media.description }} />
);

export default BlogArticleDisplay;
