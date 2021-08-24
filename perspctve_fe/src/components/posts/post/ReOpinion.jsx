import { faFistRaised, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ReOpinion = (props) => {
  return (
    <div className="mt-1 p-3 items-center justify-between flex">
      <div className="left-0 font-semibold text-gray-600">
        <FontAwesomeIcon icon={props.inSupportOf ? faHandshake : faFistRaised}/> {props.inSupportOf ? 'in support of' : 'in opposition to'} <Link to={`/opinions/${props.inSupportOf ? props.inSupportOf.uuid : props.inOppositionTo.uuid}`} className="text-blue-800">{props.inSupportOf ? `${props.inSupportOf.title.substr(0,50)}...` : `${props.inOppositionTo.title.substr(0,50)}...`}</Link> 
      </div>
    </div>
  )
}

export default ReOpinion
