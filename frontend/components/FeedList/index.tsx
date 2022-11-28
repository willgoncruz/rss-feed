import { Feed } from "../../types/feed";
import FeedItem from "./FeedItem";

import { Container } from './style';

type Props = {
    feeds: Feed[];
}

const FeedList = ({ feeds }: Props) => {
    return (
        <Container>
            {feeds.map((feed, i) => 
                <FeedItem key={i} feed={feed} />
            )}
        </Container>
    );
};

export default FeedList;
