import React from 'react'

const Title = (props) => {
  return (
    <div>
      <h1 className="pt-4 px-1 text-2xl md:text-4xl font-bold mb-10 text-blue-800">
        {props.title}
      </h1>
    </div>
  )
}

export default Title
