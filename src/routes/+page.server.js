import { getList } from '../lib/microcms';

export const load = async() => {
    return await getList();
};

export const prerender = true;