import React, { useEffect, useState } from 'react'
import ContentEditor from './createPost/ContentEditor';
import Media from './createPost/Media';
import Title from './createPost/Title';
import Buttons from './createPost/Buttons';
import Tags from './createPost/Tags';
import AnonymousToggle from './createPost/AnonymousToggle';
import OpinionContext from '../contexts/OpinionContext';
import { Prompt, useLocation } from 'react-router';

const CreatePost = () => {
  const [opinion, setOpinion] = useState({});
  const [reopinion, setReopinion] = useState({});
  
  if(reopinion)
  const query = new URLSearchParams(useLocation().search);
  setReopinion({re: query.get('re'), uuid: query.get('uuid')})


  return (
    <OpinionContext.Provider value={{opinion, setOpinion}}>
      <Prompt
       when={window.onbeforeunload =()=> true}
       message='You have unsaved changes, are you sure you want to leave?'
      />
      <div className="bg-white lg:rounded-lg w-full md:max-w-3xl lg:mt-10">
        <form method="post" action="/">
          {/* Title Form */}
          <Title/>
          {/* Media */}
          <Media/>
          {/* Anonymous toggle */}
          <AnonymousToggle/>
          {/* Content  */}
          {console.log(reopinion)};
          <ContentEditor/>
          {/* tags */}
          <div className="w-full mt-3 p-0.5 flex flex-wrap text-xs md:text-lg">
            <Tags/>
          </div>
          {/* Buttons */}
          <Buttons/>
        </form>
      </div>
    </OpinionContext.Provider>
  )
}

export default CreatePost