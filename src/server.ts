import { ApolloServer } from 'apollo-server';
import {
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { schema } from './schema';
export const Server = new ApolloServer({
	schema,
	plugins: [
		// process.env.NODE_ENV === 'production'
		// 	? ApolloServerPluginLandingPageDisabled()
		// : ApolloServerPluginLandingPageGraphQLPlayground(),
		ApolloServerPluginLandingPageGraphQLPlayground(),
	],
});
