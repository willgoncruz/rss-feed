import { Feed } from "../../../types/feed";
import styled from 'styled-components';

type Props = {
    feed: Feed;
}

const Container = styled.div`
    font-size: 16px;
    margin-top: 16px;
`;

const FeedItem = ({ feed }: Props) => {
    return (
        <Container>
            {feed.url}
        </Container>
    );
};

export default FeedItem;
