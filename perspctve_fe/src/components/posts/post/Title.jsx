import React from 'react'
import { Link } from 'react-router-dom'

const Title = (props) => {
  return (
    <div>
      <Link to={`/opinions/${props.uuid}`}>
        <h1 className="pt-4 px-1 text-2xl md:text-4xl font-bold mb-10 text-blue-800">
          {props.title}
        </h1>
      </Link>
    </div>
  )
}

export default Title
