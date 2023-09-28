import { Feed } from '@types';
import FeedItem from './FeedItem';

import { Container, FeedLink } from './style';

type Props = {
  feeds: Feed[];
  onSelectFeed: Function;
};

const FeedList = ({ feeds, onSelectFeed }: Props) => (
  <Container>
    <h1>Feeds</h1>
    {feeds.map((feed, i) => (
      <FeedLink key={i} onClick={() => onSelectFeed(i)}>
        <FeedItem feed={feed} />
      </FeedLink>
    ))}
  </Container>
);

export default FeedList;
