import NextImage, { ImageProps } from 'next/image';

const Image = (props: ImageProps) => (
  <NextImage {...props} src={`/api/image?imageUrl=${props.src}`} />
);

export default Image;
