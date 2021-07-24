import React from 'react'
import ContentEditor from './createPost/ContentEditor';
import Media from './createPost/Media';
import Title from './createPost/Title';
import Buttons from './createPost/Buttons';
import Tags from './createPost/Tags';

const CreatePost = () => {
  return (
    <div className="bg-white lg:rounded-lg w-full md:max-w-3xl lg:mt-10">
      <form method="post" action="/">
        {/* Title Form */}
        <Title/>
        {/* Media */}
        <Media/>
        {/* Content  */}
        <ContentEditor/>
        {/* tags */}
        <div className="w-full mt-3 p-0.5 flex flex-wrap text-xs md:text-lg">
          <Tags/>
        </div>
        {/* Buttons */}
        <Buttons/>
      </form>
    </div>
  )
}

export default CreatePost
