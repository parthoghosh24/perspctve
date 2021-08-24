import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchOpinion } from '../../apis/opinionService';
import PostSkeleton from '../skeletons/PostSkeleton';
import Post from './Post';
import {Helmet} from 'react-helmet';

const SinglePost = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [postReactions, setPostReactions] = useState([]);
  const { uuid } = useParams();

  useEffect(() => {
    
    if(isLoading)
    {
        fetchOpinion(uuid).then((response)=>{
            let modifiedPost = post;
            modifiedPost = response.data.opinion;
            setPost(modifiedPost);
            let modifiedPostReactions = postReactions;
            modifiedPostReactions = response.data.current_user_reactions;
            setPostReactions(modifiedPostReactions);
            setIsLoading(false);
        }).catch((error)=>{
            setIsLoading(false);
        });
    }
  },[isLoading]);

  return (
    <div className="flex w-full justify-center items-center mt-10 mb-10">
      {
        !isLoading &&
          <Helmet>
            <meta charSet="utf-8" />
            <title>{`Perspctve | ${post.title}`}</title>
            <link rel="canonical" href={`${process.env.REACT_APP_DOMAIN}/opinions/${post.uuid}`}/>
            <meta name="description" content={`${post.body.substring(0,200)}...`}/>
            <meta property="og:title" content={`Perspctve | ${post.title}`}/>
            <meta property="og:image" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
            <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}/opinions/${post.uuid}`} />
            <meta property="og:description" content={`${post.body.substring(0,200)}...`}/>

            <meta property="twitter:title" content={`Perspctve | ${post.title}`}/>
            <meta property="twitter:card" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
            <meta property="twitter:description" content={`${post.body.substring(0,200)}...`} />
          </Helmet>
      }
      {<>
        {isLoading && <PostSkeleton/>}
        {!isLoading && <Post key={uuid} post={post} current_user_reactions={postReactions}/>}
      </>
      }
      
    </div>
  )
}

export default SinglePost
