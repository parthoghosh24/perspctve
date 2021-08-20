import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { faPenNib, 
         faEllipsisV, 
         faHeart, 
         faThumbsUp,
         faThumbsDown,
         faHeartBroken,
         faMehBlank, 
         faHandshake,
         faFistRaised,
         faFlag} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPopper } from '@popperjs/core'
import { createReactions, deleteReactions } from '../../../apis/reactionService'

const CallToAction = (props) => {
  const [isReOpinionOpen, setIsReOpinionOpen] = useState(false);


  const [isReportOpen, setIsReportOpen] = useState(false);

  const reOpinionBtnRef = createRef();
  const reOpinionPopoverRef = createRef();

  const reportBtnRef = createRef();
  const reportPopoverRef = createRef();

  const [stronglyAgreePressed, setStronglyAgreePressed] = useState(props.current_user_reactions && props.current_user_reactions.find(el => el.reaction_type === 'strongly_agree' && el.opinion_uuid === props.uuid) ? true: false);
  const [agreePressed, setAgreePressed] = useState(props.current_user_reactions && props.current_user_reactions.find(el => el.reaction_type === 'agree' && el.opinion_uuid === props.uuid) ? true: false);
  const [neutralPressed, setNeutralPressed] = useState(props.current_user_reactions && props.current_user_reactions.find(el => el.reaction_type === 'neutral' && el.opinion_uuid === props.uuid) ? true: false);
  const [disagreePressed, setDisagreePressed] = useState(props.current_user_reactions && props.current_user_reactions.find(el => el.reaction_type === 'disagree' && el.opinion_uuid === props.uuid) ? true: false);
  const [stronglyDisagreePressed, setStronglyDisagreePressed] = useState(props.current_user_reactions && props.current_user_reactions.find(el => el.reaction_type === 'strongly_disagree' && el.opinion_uuid === props.uuid) ? true: false);


  const openReOpinionPopOver = () => {
    createPopper(reOpinionBtnRef.current, reOpinionPopoverRef.current,{
      placement: 'bottom'
    });
    setIsReOpinionOpen(true);
  }

  const closeReOpinionPopOver = () => {
    setIsReOpinionOpen(false);
  }

  const openReportPopOver = () => {
    createPopper(reportBtnRef.current, reportPopoverRef.current,{
      placement: 'bottom'
    });
    setIsReportOpen(true);
  }

  const closeReportPopOver = () => {
    setIsReportOpen(false);
  }

  const createOrDeleteReaction = (reaction_type, reaction_state) => {
    const payload = {opinion_uuid: props.uuid, reaction_type: reaction_type};
    if(reaction_state)
    {
      // delete
      deleteReactions(payload).then((response)=>{
      }).catch((error)=>{
        console.log(error);
      });
    }
    else
    {
      createReactions(payload).then((response)=>{
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  const handleStronglyAgree=()=>{
    setStronglyAgreePressed(!stronglyAgreePressed);
    setAgreePressed(false);
    setNeutralPressed(false);
    setDisagreePressed(false);
    setStronglyDisagreePressed(false);
    createOrDeleteReaction('strongly_agree', stronglyAgreePressed);
  }

  const handleAgree=()=>{
    setAgreePressed(!agreePressed);
    setStronglyAgreePressed(false);
    setNeutralPressed(false);
    setDisagreePressed(false);
    setStronglyDisagreePressed(false);
    createOrDeleteReaction('agree', agreePressed);
  }

  const handleNeutral=()=>{
    setNeutralPressed(!neutralPressed);
    setAgreePressed(false);
    setStronglyAgreePressed(false);
    setDisagreePressed(false);
    setStronglyDisagreePressed(false);
    createOrDeleteReaction('neutral', neutralPressed);
  }

  const handleDisagree=()=>{
    setDisagreePressed(!disagreePressed);
    setNeutralPressed(false);
    setAgreePressed(false);
    setStronglyAgreePressed(false);
    setStronglyDisagreePressed(false);
    createOrDeleteReaction('disagree', disagreePressed);
  }

  const handleStronglyDisagree=()=>{
    setStronglyDisagreePressed(!stronglyDisagreePressed);
    setDisagreePressed(false);
    setNeutralPressed(false);
    setAgreePressed(false);
    setStronglyAgreePressed(false);
    createOrDeleteReaction('strongly_disagree', stronglyDisagreePressed);
  }

  const buttonStyle = "p-3 ml-1 text-white rounded-full ";
  

  const transformStyle = "transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110";

  return (
    <div className="mt-10 pb-10 p-3 items-center justify-between flex z-20">
        <div className="left-0">
          <button onClick={handleStronglyAgree} className={stronglyAgreePressed ? `${buttonStyle} bg-green-700 ring-4 ring-green-800 w-12 h-12 sm:w-14 sm:h-14`: `${buttonStyle} bg-green-700 w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <FontAwesomeIcon className={!stronglyAgreePressed ? transformStyle: ''} icon= {faHeart}/>
          </button>
          <button onClick={handleAgree} className={agreePressed ? `${buttonStyle} bg-green-400 ring-4 ring-green-500 w-12 h-12 sm:w-14 sm:h-14`: `${buttonStyle} bg-green-400 w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <FontAwesomeIcon className={!agreePressed ? transformStyle: ''} icon= {faThumbsUp}/>
          </button>
          <button onClick={handleNeutral} className={neutralPressed ? `${buttonStyle} bg-yellow-500 ring-4 ring-yellow-600 w-12 h-12 sm:w-14 sm:h-14`: `${buttonStyle} bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <FontAwesomeIcon className={!neutralPressed ? transformStyle: ''} icon= {faMehBlank}/>
          </button>
          <button onClick={handleDisagree} className={disagreePressed ? `${buttonStyle} bg-red-400 ring-4 ring-red-500 w-12 h-12 sm:w-14 sm:h-14`: `${buttonStyle} bg-red-400 w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <FontAwesomeIcon className={!disagreePressed ? transformStyle: ''} icon= {faThumbsDown}/>
          </button>
          <button onClick={handleStronglyDisagree} className={stronglyDisagreePressed ? `${buttonStyle} bg-red-700 ring-4 ring-red-800 w-12 h-12 sm:w-14 sm:h-14`: `${buttonStyle} bg-red-700 w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
            <FontAwesomeIcon className={!stronglyDisagreePressed ? transformStyle: ''} icon= {faHeartBroken}/>
          </button>
        </div>
        <div className="right-0">
          <button className="p-3 ml-1 text-black lg:text-2xl text-blue-800 hover:text-blue-600" onClick={()=>{
            isReOpinionOpen ? closeReOpinionPopOver() : openReOpinionPopOver();
          }} ref={reOpinionBtnRef}>
            <FontAwesomeIcon icon={faPenNib}/>
          </button>
          <div className={isReOpinionOpen ? "p-0": "hidden"} ref={reOpinionPopoverRef}>
              <div className="flex flex-wrap bg-white border-gray-800 border-4 rounded">
                  <Link to={`/opinions/new?re=in_support&uuid=${props.uuid}`} className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
                    <FontAwesomeIcon icon={faHandshake}/> in support
                  </Link>
                  <br/>
                  <Link to="/opinions/new?re=in_opposition&uuid=${props.uuid}" className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
                    <FontAwesomeIcon icon={faFistRaised}/> in opposition to
                  </Link>
              </div>
          </div>
          <button className="p-3 ml-1 text-black lg:text-2xl text-blue-800 hover:text-blue-600" onClick={()=>{
            isReportOpen ? closeReportPopOver() : openReportPopOver();
          }} ref={reportBtnRef}>
            <FontAwesomeIcon icon={faEllipsisV}/>
          </button>
          <div className={isReportOpen ? "p-0": "hidden"} ref={reportPopoverRef}>
              {/* <div className="flex flex-wrap bg-white border-gray-800 border-4 rounded">
                  <button className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
                    <FontAwesomeIcon icon={faFlag}/> Report
                  </button>
              </div> */}
          </div>
        </div>
    </div>
  )
}

export default CallToAction
