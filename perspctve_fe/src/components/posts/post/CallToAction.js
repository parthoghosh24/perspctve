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
import  {createPopper } from '@popperjs/core'

const CallToAction = () => {
  const [isReOpinionOpen, setIsReOpinionOpen] = useState(false);


  const [isReportOpen, setIsReportOpen] = useState(false);

  const reOpinionBtnRef = createRef();
  const reOpinionPopoverRef = createRef();

  const reportBtnRef = createRef();
  const reportPopoverRef = createRef();

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

  return (
    <div className="mt-10 pb-10 p-3 items-center justify-between flex z-20">
        <div className="left-0">
          <button className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full bg-green-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" icon= {faHeart}/>
          </button>
          <button className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full bg-green-400 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" icon= {faThumbsUp}/>
          </button>
          <button className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full bg-yellow-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" icon= {faMehBlank}/>
          </button>
          <button className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full bg-red-400 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" icon= {faThumbsDown}/>
          </button>
          <button className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full bg-red-700 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"   icon= {faHeartBroken}/>
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
                  <Link to="/posts/new" className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
                    <FontAwesomeIcon icon={faHandshake}/> in support
                  </Link>
                  <br/>
                  <Link to="/posts/new" className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
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
              <div className="flex flex-wrap bg-white border-gray-800 border-4 rounded">
                  <button className="p-2 w-full text-black lg:text-1xl hover:bg-blue-800 hover:text-white">
                    <FontAwesomeIcon icon={faFlag}/> Report
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CallToAction
