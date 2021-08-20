
import React from 'react'

import Media from './post/Media'
import Author from './post/Author'
import Content from './post/Content'
import Tags from './post/Tags'
import CallToAction from './post/CallToAction'
import Spread from './post/Spread'
import Title from './post/Title'
import ReOpinion from './post/ReOpinion'
 
const Post = (props) => {

  return (
    <div className="bg-white lg:rounded-lg  max-w-full md:max-w-3xl lg:mt-10">
      <Title title={props.post.title}/>
      {props.post.media && <Media media={props.post.media}/>}
      <Author author = {props.post.user} timeAgo = {props.post.time_ago} isAnonymous = {props.post.is_anonymous}/>
      {(props.post.in_support_of || props.post.in_oppostion_to) && <ReOpinion inSupportOf = {props.post.in_support_of} inOppositionTo = {props.post.in_oppostion_to}/>}
      <Content content = {props.post.body}/>
      <Tags tags = {props.post.tags}/>
      <Spread stats={props.post.stats}/>
      <CallToAction uuid = {props.post.uuid} current_user_reactions={props.current_user_reactions}/>
    </div>
  )
}

export default Post
