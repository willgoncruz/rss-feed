import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

    type Feed {
        url: String!
    }

    type Query {
        feeds: [Feed]
    }
`;

const feeds = [{ url: 'test' }];

const resolvers = {
    Query: {
        feeds: () => feeds,
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
