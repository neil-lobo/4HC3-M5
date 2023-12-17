import type { PageLoad } from './$types';
import data from '$lib/data.json';

export const load: PageLoad = ({ params }) => {
	const id = parseInt(params.id);

	if (!data.users[id]) {
		return {
			error: true,
			message: 'User not found!'
		};
	}

	const out = {
		error: false,
		id,
		user: data.users[id],
		servers: data.servers
	};

	return out;
};
