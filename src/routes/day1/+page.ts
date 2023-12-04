import type { Child } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');

    if (!res.ok) throw error(res.status);
    
    return {
        children: await res.json() as Child[]
    };
};