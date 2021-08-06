import { faPaperPlane, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Buttons = () => {
  return (
    <div className="mt-10 pb-10 p-3 items-center justify-between flex z-20">
      <div className="w-full">
        <button className="p-3 ml-1 text-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-black hover:border-blue-800">
          <FontAwesomeIcon icon={faTrash}/> Discard
        </button>
        <button className="p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
          <FontAwesomeIcon icon={faSave}/> Draft it
        </button>
        <button className="right-0 p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
          <FontAwesomeIcon icon={faPaperPlane}/> Publish
        </button>
      </div>
    </div>
  )
}

export default Buttons
