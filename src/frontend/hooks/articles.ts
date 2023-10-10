import { useEffect, useState } from "react";
import { Article, Feed } from "@types";
import apolloClient from '../client/apollo-client';
import { GET_ARTICLES } from "../query";

type ArticleData = {
  loading: boolean;
  articles: Article[];
}

const useArticles = (feed: Feed | null): ArticleData => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticlesQuery() {
      if (!feed) {
        return;
      }

      try {
        const { data } = await apolloClient.query({
          query: GET_ARTICLES(feed.url),
        });

        setLoading(false);
        setArticles(data.articles);
      } catch {
        setLoading(false);
      }
    }

    setLoading(true);
    getArticlesQuery();
  }, [feed]);

  return { articles, loading };
}

export default useArticles;