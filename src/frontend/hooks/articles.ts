import { useEffect, useState } from "react";
import { Article, Feed } from "@types";
import apolloClient from '../client/apollo-client';
import { GET_ARTICLES } from "../query";

const useArticles = (feed: Feed | null): Article[] => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticlesQuery() {
      if (!feed) {
        return;
      }

      const { data } = await apolloClient.query({
        query: GET_ARTICLES(feed.url),
      });

      setArticles(data.articles);
    }
    getArticlesQuery();
  }, [feed]);

  return articles;
}

export default useArticles;