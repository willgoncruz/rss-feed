import { gql } from '@apollo/client';
import styled from 'styled-components';
import { useState } from 'react';

import apolloClient from '../client/apollo-client';

import { Feed } from '../types/feed';
import FeedList from '../components/FeedList';
import ActiveFeed from '../components/ActiveFeed';

type Props = {
  feeds: Feed[];
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const FeedListContainer = styled.div`
  flex: 1 1 10%;
`;

const ActiveFeedContainer = styled.div`
  flex: 1 1 90%;
  margin-left: 16px;
`;

export default function Feeds({ feeds }: Props) {
  const [feed, setFeed] = useState<Feed | null>(null);

  const onSelectFeed = (index: number) => setFeed(feeds[index]);

  return (
    <div>
      <h1>Feeds</h1>
      <Container>
        <FeedListContainer>
          <FeedList feeds={feeds} onSelectFeed={onSelectFeed} />
        </FeedListContainer>
        <ActiveFeedContainer>
          <ActiveFeed feed={feed} />
        </ActiveFeedContainer>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const {
    data: { feeds },
  } = await apolloClient.query({
    query: gql`
      query Feeds {
        feeds {
          url
        }
      }
    `,
  });

  return {
    props: {
      feeds,
    },
  };
}
