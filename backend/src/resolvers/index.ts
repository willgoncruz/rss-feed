const feeds = [{ url: 'test.rss?query' }, { url: 'second.rss' }, { url: 'third.rss' }];

const articles = (url: string) => {
    return [{ name: 'Article' }];
};

export default {
    Query: {
        feeds: () => feeds,
        articles,
    }
};