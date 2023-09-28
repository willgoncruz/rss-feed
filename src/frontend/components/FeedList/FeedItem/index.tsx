import styled from 'styled-components';

import { Feed } from '@types';

type Props = {
  feed: Feed;
};

const Container = styled.div`
  font-size: 16px;
  margin-top: 16px;
`;

const FeedItem = ({ feed }: Props) => <Container>{feed.title}</Container>;

export default FeedItem;
