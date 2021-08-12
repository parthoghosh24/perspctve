import { faPaperPlane, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { createOpinion } from '../../../apis/opinionService';
import OpinionContext from '../../contexts/OpinionContext';

const Buttons = () => {
  const {opinion, setOpinion} = useContext(OpinionContext);

  const onPublish = (e)=>{
    e.preventDefault();
    let localOpinion = opinion
    localOpinion.mode = 'published'
    setOpinion(localOpinion);
    console.log(opinion);
    createOpinion(opinion).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    });
  }
  return (
    <div className="mt-10 pb-10 p-3 items-center justify-between flex z-20">
      <div className="w-full">
        <button className="p-3 ml-1 text-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-black hover:border-blue-800">
          <FontAwesomeIcon icon={faTrash}/> Discard
        </button>
        <button className="p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
          <FontAwesomeIcon icon={faSave}/> Draft it
        </button>
        <button onClick={onPublish} className="right-0 p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
          <FontAwesomeIcon icon={faPaperPlane}/> Publish
        </button>
      </div>
    </div>
  )
}

export default Buttons
