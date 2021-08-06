import React from 'react'

const Loading = () => {
  return (
    <div className ="flex space-x-2 p-5 justify-center items-center">
      <div
          className="bg-white p-2  w-4 h-4 rounded-full animate-bounce white-circle"
        ></div>
        <div
          className="bg-white p-2 w-4 h-4 rounded-full animate-bounce white-circle"
        ></div>
        <div
          className="bg-white p-2  w-4 h-4 rounded-full animate-bounce white-circle"
        ></div>
    </div>
  )
}

export default Loading
