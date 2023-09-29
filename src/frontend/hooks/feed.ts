import { useMutation } from '@apollo/client';

import { ADD_FEED, LIST_FEEDS } from '../query';
import apolloClient from '../client/apollo-client';

const useSaveNewFeed = () => {
  const [addNewFeed, { loading, error }] = useMutation(ADD_FEED, {
    client: apolloClient,
    refetchQueries: [
      LIST_FEEDS,
    ],
  })

  return [addNewFeed, { loading, error }];
}

export default useSaveNewFeed;