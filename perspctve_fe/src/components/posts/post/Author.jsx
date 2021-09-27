import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Author = (props) => {
  return (
    <div className="mt-1 p-3 items-center justify-between flex">
        <Link to={props.isAnonymous ? 'anonymous' : props.author.username}>
          <div className="left-0">
            {
              props.isAnonymous || props.author.avatar === null?
              <FontAwesomeIcon icon={faUserCircle} className={`float-left w-16 ${props.author && props.author.avatar === null && 'text-blue-800'}`}/>
              :
              <img src={props.author.avatar} className="rounded-full w-7 float-left" alt="author"/>
            }
            {
              props.isAnonymous ?
              <span className="font-semibold">{'Anonymous User'}</span>
              :
              <span className="font-semibold">{`${props.author.first_name} ${props.author.last_name}`}</span>
            }
          </div>
        </Link>
        <div className="right-0">
          <p className="font-semibold text-gray-400">{`${props.timeAgo} ago`}</p>
        </div>
    </div>
  )
}

export default Author
