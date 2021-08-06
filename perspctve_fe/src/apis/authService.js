import { post } from "./api"

const fetchTokenUrl = '/api/v1/auths/token'

const fetchToken = async (token)=>{
  return await post(fetchTokenUrl, {data: {token: token}});
}

export { fetchToken };