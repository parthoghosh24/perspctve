import { get, post } from "./api"

const opinionsUrl = '/api/v1/opinions'

const createOpinion = async (opinionData) =>{
  return await post(opinionsUrl, {data: {opinion: opinionData}, headers: {Authorization: `Bearer ${localStorage.getItem('token')}`} })
}

const fetchOpinions = async () =>{
  return await get(opinionsUrl)
}

const fetchOpinionsForUser = async (username) =>{
  console.log(username);
  let opinionsUrlForUser = `/api/v1/users/${username}/opinions`
  return await get(opinionsUrlForUser, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
}

export { createOpinion, fetchOpinions, fetchOpinionsForUser };
