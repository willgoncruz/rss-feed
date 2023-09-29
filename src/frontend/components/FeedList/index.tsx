import { Feed } from '@types';
import Link from 'next/link';
import Button from '../Button';
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

    <Link href="/feeds?newFeed=true" as="/new/feed" scroll={false}>
      <Button>Add Feed</Button>
    </Link>
  </Container>
);

export default FeedList;
