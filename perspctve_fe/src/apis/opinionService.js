import { get, post } from "./api"

const opinionsUrl = '/api/v1/opinions';

const createOpinion = async (opinionData) =>{
  return await post(opinionsUrl, {data: {opinion: opinionData}});
}

const fetchOpinions = async () =>{
  return await get(opinionsUrl);
}

const fetchOpinionsForUser = async (username) =>{
  let opinionsUrlForUser = `/api/v1/users/${username}/opinions`;
  return await get(opinionsUrlForUser);
}

const fetchOpinion = async (uuid) =>{
  return await get(`${opinionsUrl}/${uuid}`);
}

export { createOpinion, fetchOpinions, fetchOpinionsForUser, fetchOpinion };
