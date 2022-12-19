import axios from 'axios';
import { parseString } from 'xml2js';

const feeds = () => [{ url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCtNTsm4XIQf-TNk5nntGTOA' }, { url: 'second.rss' }, { url: 'third.rss' }];

const articles = (obj: object, args: { url : string }) => {
    return axios.get(args.url).then((response) => {
        let data;

        parseString(response.data, { explicitArray: false },  (err, results) => {
            data = results.feed.entry;
        });

        return data;
    }).catch((e: Error) => {
        console.error('Error on article call', e);
    });
};

export default {
    Query: {
        feeds,
        articles,
    }
};