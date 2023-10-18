import { Feed } from '@types';
import styled from 'styled-components';
import { Text } from '../../Typography';

type Props = {
  feed: Feed;
};

const Container = styled.div`
  margin: 8px 0;

  &:hover {
    background: darkblue;
  }
`;

const FeedItem = ({ feed }: Props) => (
  <Container>
    <Text>{feed.title}</Text>
  </Container>
);

export default FeedItem;
