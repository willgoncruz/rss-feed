import { gql } from '@apollo/client';
import { useState } from 'react';

import { Feed } from '@types';
import { useRouter } from 'next/router';
import apolloClient from '../../client/apollo-client';

import FeedList from '../../components/FeedList';
import ActiveFeed from '../../components/ActiveFeed';
import ArticleSelected from '../../components/ArticleSelected';
import Modal from '../../components/Modal';
import useArticles from '../../hooks/articles';
import { ActiveFeedContainer, Container, FeedListContainer, Page } from './styles';
import NewFeed from '../../components/NewFeed';
import { LIST_FEEDS } from '../../query';

type Props = {
  feeds: Feed[];
};

export default function Feeds({ feeds }: Props) {
  const [feed, setFeed] = useState<Feed | null>(null);
  const articles = useArticles(feed);

  const {
    push,
    query: { newFeed, articleID },
  } = useRouter();

  const onSelectFeed = (index: number) => setFeed(feeds[index]);
  const selectedArticle = articles.find((a) => a.id === articleID);

  const closeModal = () => push('/feeds', '/feeds', { scroll: false });

  return (
    <Page>
      <Container>
        <FeedListContainer>
          <FeedList feeds={feeds} onSelectFeed={onSelectFeed} />
        </FeedListContainer>
        <ActiveFeedContainer>
          <ActiveFeed articles={articles} />
        </ActiveFeedContainer>

        {articleID && selectedArticle && (
          <Modal onCancel={closeModal}>
            <ArticleSelected article={selectedArticle} />
          </Modal>
        )}

        {newFeed && (
          <Modal onCancel={closeModal}>
            <NewFeed onSuccess={closeModal} />
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
    query: LIST_FEEDS,
  });

  return {
    props: {
      feeds,
    },
  };
}
