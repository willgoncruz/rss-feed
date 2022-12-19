import styled from 'styled-components';
import { Feed } from '../../../types/feed';

type Props = {
  feed: Feed;
};

const Container = styled.div`
  font-size: 16px;
  margin-top: 16px;
`;

const FeedItem = ({ feed }: Props) => <Container>{feed.url}</Container>;

export default FeedItem;
