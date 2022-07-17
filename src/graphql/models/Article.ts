import { objectType } from 'nexus';

export const Article = objectType({
	name: 'Article',
	definition(t) {
		t.int('id');
		t.string('title');
		t.string('body');
		t.boolean('published');
	},
});
