import { gql } from '@apollo/client';
import styled from 'styled-components';

import apolloClient from '../client/apollo-client';
import { Feed } from '../types/feed';
import FeedList from '../components/FeedList';

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
`;

export default function Feeds({ feeds }: Props) {
    return (
        <div>
            <h1>Feeds</h1>
            <Container>
                <FeedListContainer>
                    <FeedList feeds={feeds} />
                </FeedListContainer>
                <ActiveFeedContainer>

                </ActiveFeedContainer>
            </Container>

        </div>
    );
};

export async function getServerSideProps() {
    const { data: { feeds } } = await apolloClient.query({
        query: gql`
            query Feeds {
                feeds {
                    url
                }
            }
        `
    });

    return {
        props: {
            feeds,
        }
    }
};