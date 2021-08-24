import React, { useEffect, useState } from 'react'
import Empty from '../common/Empty';
import Post from './Post';
import { fetchOpinions } from '../../apis/opinionService';
import PostsSkeleton from '../skeletons/PostsSkeleton';
import {Helmet} from 'react-helmet';

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
  },[posts]);

  return (
    <div className="flex w-full justify-center items-center mt-10 md:mb-10">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Perspctve | Explore trending opinions</title>
                <link rel="canonical" href={`${process.env.REACT_APP_DOMAIN}`} />
                <meta name="description"
                  content='explore the trending opinions'
                />
                 <meta property="og:title" content='Perspctve | Explore trending opinions'/>
                 <meta property="og:image" content={'/images/perspctve.png'} />
                 <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}/explore`} />
                 <meta property="og:description" content='explore the trending opinions' />

                 <meta property="twitter:title" content='Perspctve | Explore trending opinions'/>
                 <meta property="twitter:card" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
                 <meta property="twitter:description" content='explore the trending opinions' />

        </Helmet>
        {isLoading && <PostsSkeleton/>}
        {!isLoading && !isEmpty &&
            <ul>
              {          
                posts.map((post, _index)=>(
                  <li key={post.uuid}><Post key={post.uuid} post={post} current_user_reactions={postReactions}/></li>
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
