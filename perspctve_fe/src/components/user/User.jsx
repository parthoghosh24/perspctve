import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchOpinionsForUser } from '../../apis/opinionService';
import Empty from '../common/Empty';
import Post from '../posts/Post';
import ProfileIntro from '../profile/ProfileIntro';
import PostsSkeleton from '../skeletons/PostsSkeleton';
import {Helmet} from 'react-helmet';

const User = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [user, setUser] = useState({});
  const [postReactions, setPostReactions] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let loading = !isLoading;
    setIsLoading(loading);
    if(loading)
    {
        fetchOpinionsForUser(username).then((response)=>{
          let modifiedPosts = posts;
          modifiedPosts = response.data.opinions;
          let modifiedPostReactions = postReactions;
          modifiedPostReactions = response.data.current_user_reactions;
          setPosts(modifiedPosts);
          setUser(response.data.user);
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
      {
        !isLoading && !isEmpty &&
        <Helmet>
          <meta charSet="utf-8" />
          <title>{user.username ==='anonymous' ? "Perspctve | Anonymous User's opinions" : `Perspctve | ${user.first_name} ${user.last_name}'s opinions`}</title>
          <link rel="canonical" href={`${process.env.REACT_APP_DOMAIN}`} />
          <meta name="description"
            content={user.username ==='anonymous' ? "Check out Anonymous's opinions" : `Check out ${user.first_name}'s opinions`}
          />
          <meta property="og:title" content={user.username ==='anonymous' ? "Perspctve | Anonymous User's opinions" : `Perspctve | ${user.first_name} ${user.last_name}'s opinions`}/>
          <meta property="og:image" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`} />
          <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}/${user.username}`} />
          <meta property="og:description" content={user.username ==='anonymous' ? "Check out Anonymous's opinions" : `Check out ${user.first_name}'s opinions`} />
          <meta property="twitter:title" content={user.username ==='anonymous' ? "Perspctve | Anonymous User's opinions" : `Perspctve | ${user.first_name} ${user.last_name}'s opinions`}/>
          <meta property="twitter:card" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
          <meta property="twitter:description" content={user.username ==='anonymous' ? "Check out Anonymous's opinions" : `Check out ${user.first_name}'s opinions`} />
        </Helmet>  
      }
      
      <ul>
        <>
          {isLoading && <PostsSkeleton/>}
          {!isLoading && !isEmpty &&
            
              <>
              <li key={user.username}><ProfileIntro user={user}/></li>
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

export default User
