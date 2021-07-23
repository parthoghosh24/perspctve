
import React from 'react'

import Media from './post/Media'
import Author from './post/Author'
import Content from './post/Content'
import Tags from './post/Tags'
import CallToAction from './post/CallToAction'
import Spread from './post/Spread'
import Title from './post/Title'
 
const Post = () => {
  return (
    <div className="bg-white lg:rounded-lg  max-w-full md:max-w-3xl lg:mt-10">
      <Title/>
      <Media/>
      <Author/>
      <Content/>
      <Tags/>
      <Spread/>
      <CallToAction/>
    </div>
  )
}

export default Post
