import { createClient } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

//APIの呼び出し
export const getList = async (queries) => {
  return await client.get({ endpoint: "blogs", queries });
};
export const getDetail = async (
  contentId,
  queries
) => {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries,
  });
};