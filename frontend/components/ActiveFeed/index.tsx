import { gql } from "@apollo/client";
import { Feed, Article } from "../../types/feed";
import apolloClient from '../../client/apollo-client';
import { useEffect, useState } from "react";

type Props = {
    feed: Feed | null;
}

const GET_ARTICLES = (url: string) => gql`
    query Articles {
        articles(url: "${url}") {
            title
        }
    }
`

const ActiveFeed = ({ feed }: Props) => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function getArticles() {
            if (!feed) {
                return;
            }

            const { data: { articles } } = await apolloClient.query({
                query: GET_ARTICLES(feed.url),
            });

            return setArticles(articles);
        }
        getArticles();
    }, [feed]);

    if (!feed) {
        return <div>No feed selected ;-;</div>;
    }

    console.log('DATA: ', articles);
    return (
        <div>
            <span>SELECT FEED BELOW</span>
            <div>
                { feed.url }
                { articles.map((article, i) => 
                    <div key={i}>
                        {article.title}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActiveFeed;
