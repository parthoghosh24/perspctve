import { faFistRaised } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ReOpinion = () => {
  return (
    <div className="mt-1 p-3 items-center justify-between flex">
      <div className="left-0 font-semibold text-gray-600">
        <FontAwesomeIcon icon={faFistRaised}/> in opposition to <Link to='/opinions/abc-def' className="text-blue-800">Article</Link> 
      </div>
    </div>
  )
}

export default ReOpinion
