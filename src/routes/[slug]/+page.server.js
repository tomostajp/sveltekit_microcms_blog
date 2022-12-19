import { getDetail } from '../../lib/microcms';

export const load = async({ params }) => {
    return await getDetail(params.slug);
}