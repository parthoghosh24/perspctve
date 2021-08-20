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
  const [postReactions, setPostReactions] = useState([]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let loading = !isLoading;
    setIsLoading(loading);
    if(loading)
    {
        fetchOpinionsForUser(user.username).then((response)=>{
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
    <div className="flex w-full justify-center items-center mt-10">
      <ul>
        <li><ProfileIntro userProfile ={{name:`${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}`, 
                                         avatar: localStorage.getItem('avatar'), 
                                         opinions: localStorage.getItem('opinions'), 
                                         total_agreeing: localStorage.getItem('total_agreeing')}}/></li>
        <>
          {isLoading && <PostsSkeleton/>}
          {!isLoading && !isEmpty &&
            
              <>
                {          
                  posts.map((post, index)=>(
                    <li><Post post={post} current_user_reactions={postReactions}/></li>
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
