import axios from 'axios'
const baseUrl = 'http://localhost:3001';

const get = (url, options={})=>{
  return request(url, 'get', options)
}

const post = async (url, options={})=>{
  return await request(url, 'post', options)
}

const put = (url, options={})=>{
  return request(url, 'put', options)
}

const destroy = (url, options={})=>{
  return request(url, 'delete', options)
}

const request = async (url, method, options)=>{
  let requestPayload = {url: url, method: method, baseURL: baseUrl, headers: {"Content-Type":"application/json"}} 

  if(options.data !== undefined)
  {
    requestPayload.data = options.data
  }
  if(options.headers !== undefined)
  {
    requestPayload.headers = Object.assign({}, requestPayload.headers, options.headers)
  }
  if(options.params !== undefined)
  {
    requestPayload.params = options.params
  }
  try {
    const response  = await axios(requestPayload)
    return response;
  } catch (error) {
    console.log(error);
  }
  
  
}

export {get, post, put, destroy};