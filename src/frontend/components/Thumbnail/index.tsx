import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 10px;
`;

const ThumbnailImage = (props: ImageProps) => <StyledImage {...props} />;

export default ThumbnailImage;
