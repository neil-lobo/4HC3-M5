import type { PageLoad } from './$types';
import data from '$lib/data.json';

export const load: PageLoad = ({ params }) => {
	const id = parseInt(params.id);

	if (!data.communities[id]) {
		return {
			error: true,
			message: 'Community not found!'
		};
	}

	const out = {
		error: false,
		id,
		community: data.communities[id],
		servers: data.servers
	};

	return out;
};
