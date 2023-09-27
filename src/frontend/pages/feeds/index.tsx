import { gql } from '@apollo/client';
import styled from 'styled-components';
import { useState } from 'react';

import { Feed, Article } from '@types';
import apolloClient from '../../client/apollo-client';

import FeedList from '../../components/FeedList';
import ActiveFeed from '../../components/ActiveFeed';
import ArticleSelected from '../../components/ArticleSelected';
import Modal from '../../components/Modal';
import { useSelectedArticle } from '../../hooks/articles';

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
  align-self: flex-start;
`;

const ActiveFeedContainer = styled.div`
  flex: 1 1 30%;
  margin-left: 16px;
`;

const Page = styled.div`
  padding: 32px;
`;

export default function Feeds({ feeds }: Props) {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [article, setArticle] = useSelectedArticle();

  const onSelectFeed = (index: number) => setFeed(feeds[index]);

  return (
    <Page>
      <h1>Feeds</h1>
      <Container>
        <FeedListContainer>
          <FeedList feeds={feeds} onSelectFeed={onSelectFeed} />
        </FeedListContainer>
        <ActiveFeedContainer>
          <ActiveFeed feed={feed} onSelectArticle={setArticle} />
        </ActiveFeedContainer>

        {article && (
          <Modal onCancel={() => setArticle(undefined)}>
            <ArticleSelected article={article} />
          </Modal>
        )}
      </Container>
    </Page>
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
