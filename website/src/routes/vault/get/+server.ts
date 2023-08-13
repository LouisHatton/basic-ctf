import { db, fetchUserProfile } from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const username = data['username'] as string;
	const password = data['password'] as string;

	if (username && password) {
		try {
			const res = await fetchUserProfile(username, password);
			return json(res, { status: 200 });
		} catch (err: unknown) {
			console.error(err);
			return json(
				{
					message: 'Internal Error',
					error: (err as Error).message
				},
				{ status: 500 }
			);
		}
	}

	return json({ message: 'username and password not provided' }, { status: 400 });
};
