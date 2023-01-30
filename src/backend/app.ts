import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFile } from 'graphql-import-files';

import resolvers from './resolvers';
const typeDefs = loadFile('./src/backend/schema/schema.graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
