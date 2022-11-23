import { gql } from '@apollo/client';
import apolloClient from '../client/apollo-client';
import { Feed } from '../types/feed';

type Props = {
  feeds: Feed[];
};

export default function Feeds({ feeds }: Props) {
    return (
        <div>
            <h1>Feeds</h1>
            {feeds.map((feed, i) => 
                <div key={i}>{feed.url}</div>
            )}
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