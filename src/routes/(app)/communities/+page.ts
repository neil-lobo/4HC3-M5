import type { PageLoad } from './$types';
import data from "$lib/data.json"

export const load: PageLoad = () => {
    return {
        communities: data.communities
    }
};