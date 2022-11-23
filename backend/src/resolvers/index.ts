const feeds = [{ url: 'test.rss?query' }, { url: 'second.rss' }, { url: 'third.rss' }];

export default {
    Query: {
        feeds: () => feeds,
    }
};