import { Thumbnail } from '@types';
import Image from 'next/image';

type Props = {
  image: Thumbnail;
};

const ArticleCard = ({ image }: Props) => (
  <Image alt="Card Thumbnail" src={image.url} width={480} height={360} />
);

export default ArticleCard;
