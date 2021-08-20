import React, { useEffect, useState } from 'react'
import Empty from '../common/Empty';
import Post from './Post';
import { fetchOpinions } from '../../apis/opinionService';
import PostsSkeleton from '../skeletons/PostsSkeleton';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postReactions, setPostReactions] = useState([]);

  useEffect(() => {
    let loading = !isLoading;
    setIsLoading(loading);
    if(loading)
    {
        fetchOpinions().then((response)=>{
            let modifiedPosts = posts;
            modifiedPosts = response.data.opinions;
            setPosts(modifiedPosts);
            let modifiedPostReactions = postReactions;
            modifiedPostReactions = response.data.current_user_reactions;
            setPostReactions(modifiedPostReactions);
            setIsLoading(false);
            setIsEmpty(false); 
        }).catch((error)=>{
            setIsLoading(false);
            setIsEmpty(true);
        });
    }
  },[]);

  return (
    <div className="flex w-full justify-center items-center mt-10 md:mb-10">
        {isLoading && <PostsSkeleton/>}
        {!isLoading && !isEmpty &&
            <ul>
              {          
                posts.map((post, _index)=>(
                  <li key={post.uuid}><Post post={post} current_user_reactions={postReactions}/></li>
                ))
              }
            </ul>   
        }
        {
          !isLoading && isEmpty &&
          <Empty/>
        }
    </div>  
  )
}

export default Posts
