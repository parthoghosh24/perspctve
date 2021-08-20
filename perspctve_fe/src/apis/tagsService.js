import { get } from "./api"

const tagsSearchUrl = '/api/v1/tags/search';

const tagSearch = async (term) =>{
  return await get(`${tagsSearchUrl}?q=${term}`);
}

export { tagSearch };