import { post, destroy } from "./api"

const reactionsUrl = '/api/v1/reactions';

const createReactions = async (reactionData) =>{
  let payLoad = {data: {reaction: reactionData}};
  return await post(reactionsUrl, payLoad);
}

const deleteReactions = async (reactionData)=>{
  let payLoad = {data: {reaction: reactionData}};
  return await destroy(reactionsUrl, payLoad);
}

export { createReactions, deleteReactions };