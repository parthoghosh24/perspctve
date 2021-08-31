import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchOpinionsForUser } from '../../apis/opinionService';
import Empty from '../common/Empty';
import UserContext from '../contexts/UserContext';
import Post from '../posts/Post';
import PostsSkeleton from '../skeletons/PostsSkeleton';
import ProfileIntro from './ProfileIntro'
import {Helmet} from 'react-helmet';

const Profile = () => {
  const { username } = useParams();
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
        fetchOpinionsForUser(username ? username : user.username).then((response)=>{
          let modifiedPosts = posts;
          modifiedPosts = response.data.opinions;
          setPosts(modifiedPosts);
          setUser(response.data.user);
          let modifiedPostReactions = postReactions;
          modifiedPostReactions = response.data.current_user_reactions;
          setPostReactions(modifiedPostReactions);
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
        <Helmet>
                <meta charSet="utf-8" />
                <link rel="no-follow" href={`${process.env.REACT_APP_DOMAIN}/profile`} />
        </Helmet>
      <ul>
        <>
          <li key={user.username}><ProfileIntro key={user.username} user={user}/></li>
          {isLoading && <PostsSkeleton/>}
          {!isLoading && !isEmpty &&
            
              <>
                {          
                  posts.map((post, index)=>(
                    <li key={post.uuid}><Post key={post.uuid} post={post} current_user_reactions={postReactions}/></li>
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
