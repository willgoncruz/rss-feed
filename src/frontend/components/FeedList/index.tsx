import { Feed } from '@types';
import Link from 'next/link';
import { Row } from 'antd';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector';
import ThemeSelector from '../ThemeSelector';
import { Title } from '../Typography';
import FeedItem from './FeedItem';

import { Container, FeedLink, PaddingContainer } from './style';

type Props = {
  feeds: Feed[];
  onSelectFeed: Function;
};

const FeedList = ({ feeds, onSelectFeed }: Props) => (
  <Container>
    <Title>Feeds</Title>

    <PaddingContainer>
      {feeds.map((feed, i) => (
        <FeedLink key={i} onClick={() => onSelectFeed(i)}>
          <FeedItem feed={feed} />
        </FeedLink>
      ))}

      <Link href="/feeds?newFeed=true" as="/new/feed" scroll={false}>
        <Button>Add Feed</Button>
      </Link>

      <Row>
        <ThemeSelector />
      </Row>
      <Row>
        <LanguageSelector />
      </Row>
    </PaddingContainer>
  </Container>
);

export default FeedList;
