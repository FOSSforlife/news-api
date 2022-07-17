import { extendType } from 'nexus';

export const PostQuery = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.field('drafts', {
			type: 'Article',
			resolve: () => [
				{
					id: 2,
					body: 'kasdkj',
				},
			],
		});
	},
});
