import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ params }) => {
	const { post } = params;

	console.log(`> get a post with id "${post}" from database`);

	return {
		status: 200,
		body: { text: `Hello!  This is my post with the id of ${post}` }
	};
};
