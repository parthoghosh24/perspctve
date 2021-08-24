import React, { useEffect, useState } from 'react'
import ContentEditor from './createPost/ContentEditor';
import Media from './createPost/Media';
import Title from './createPost/Title';
import Buttons from './createPost/Buttons';
import Tags from './createPost/Tags';
import AnonymousToggle from './createPost/AnonymousToggle';
import OpinionContext from '../contexts/OpinionContext';
import { Prompt, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faHandshake } from '@fortawesome/free-solid-svg-icons';
import {Helmet} from 'react-helmet';

const CreatePost = () => {
  const [opinion, setOpinion] = useState({});
  const [reopinion, setReopinion] = useState(null);
  
  const uri = useLocation().search;

  useEffect(() => {
    const query = new URLSearchParams(uri);
    if(query.get('re'))
    {
      let localOpinion = opinion;
      localOpinion[query.get('re')] = query.get('uuid');
      setOpinion(localOpinion);
      setReopinion({re: query.get('re'), uuid: query.get('uuid')});
    }
  }, []);
  


  return (
    <OpinionContext.Provider value={{opinion, setOpinion}}>
      <Prompt
       when={window.onbeforeunload =()=> true}
       message='You have unsaved changes, are you sure you want to leave?'
      />
      <div className="bg-white lg:rounded-lg w-full md:max-w-3xl lg:mt-10">
        <Helmet>
            <meta charSet="utf-8" />
            <link rel="no-follow" href={`${process.env.REACT_APP_DOMAIN}/opinions/new`} />
        </Helmet>
        <form method="post" action="/">
          {/* Title Form */}
          <Title/>
          {/* Media */}
          <Media/>
          {/* Anonymous toggle */}
          <AnonymousToggle/>
          {/* Reopinion */}
          {reopinion && <input type='hidden' name={reopinion.re} value={reopinion.uuid}/>}
          {reopinion &&
            <div className="p-4 text-gray-400 font-medium">
              <FontAwesomeIcon icon={reopinion.re === 'in_support_of' ? faHandshake : faFistRaised}/> {reopinion.re.replaceAll('_',' ')} <span className="text-blue-800 ml-2">{reopinion.uuid}</span>
            </div> 
          }
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
    </OpinionContext.Provider>
  )
}

export default CreatePost
