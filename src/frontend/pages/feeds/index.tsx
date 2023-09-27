import { gql } from '@apollo/client';
import styled from 'styled-components';
import { useState } from 'react';

import { Feed } from '@types';
import { useRouter } from 'next/router';
import apolloClient from '../../client/apollo-client';

import FeedList from '../../components/FeedList';
import ActiveFeed from '../../components/ActiveFeed';
import ArticleSelected from '../../components/ArticleSelected';
import Modal from '../../components/Modal';
import useArticles from '../../hooks/articles';

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
  const articles = useArticles(feed);

  const {
    push,
    query: { articleID },
  } = useRouter();

  const onSelectFeed = (index: number) => setFeed(feeds[index]);
  const selectedArticle = articles.find((a) => a.id === articleID);

  return (
    <Page>
      <h1>Feeds</h1>
      <Container>
        <FeedListContainer>
          <FeedList feeds={feeds} onSelectFeed={onSelectFeed} />
        </FeedListContainer>
        <ActiveFeedContainer>
          <ActiveFeed articles={articles} />
        </ActiveFeedContainer>

        {articleID && (
          <Modal onCancel={() => push('/feeds', '/feeds', { scroll: false })}>
            <ArticleSelected article={selectedArticle} />
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
