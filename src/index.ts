import { Server } from './server';
Server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
