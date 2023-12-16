import type { PageLoad } from './$types';
import data from "$lib/data.json"

export const load: PageLoad = ({ params }) => {
	const id = parseInt(params.id)
    
    if (!data.servers[id]) {
        return {
            error: true,
            message: "Sever not found!"
        }
    }


    const out = {
        error: false,
		id,
        server: data.servers[id]
	}

    // console.log(out);
    return out
};