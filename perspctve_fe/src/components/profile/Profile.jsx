import React, { useContext, useEffect, useState } from 'react'
import { fetchOpinionsForUser } from '../../apis/opinionService';
import Empty from '../common/Empty';
import UserContext from '../contexts/UserContext';
import Post from '../posts/Post';
import PostsSkeleton from '../skeletons/PostsSkeleton';
import ProfileIntro from './ProfileIntro'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const {user, setUser} = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let loading = !isLoading;
    setIsLoading(loading);
    if(loading)
    {
      fetchOpinionsForUser(user.username).then((response)=>{        
        let modifiedPosts = posts;
        modifiedPosts = response.data
        setPosts(modifiedPosts);
        setIsLoading(false);
        if(modifiedPosts.length > 0)
        {
          setIsEmpty(false);
        }
        
      }).catch((error)=>{
          setIsLoading(false);
          setIsEmpty(true);
      });
    }
  },[]);

  return (
    <div className="flex w-full justify-center items-center mt-10">
      <ul>
        <li><ProfileIntro/></li>
        <>
          {isLoading && <PostsSkeleton/>}
          {!isLoading && !isEmpty &&
            
              <>
                {          
                  posts.map((post, index)=>(
                    <li><Post post={post}/></li>
                  ))
                }
              </>
          }
          {
            !isLoading && isEmpty &&
          <Empty/>
          }
        </>
      </ul>
    </div>
  )
}

export default Profile
