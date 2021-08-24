import SinglePost from "../components/posts/SinglePost"

const post = () => {
  return (
   <SinglePost key={Date.now()}/> 
  )
}

export default post