import { Feed } from '@types';
import { Text } from '../../Typography';

type Props = {
  feed: Feed;
};

const FeedItem = ({ feed }: Props) => <Text>{feed.title}</Text>;

export default FeedItem;
