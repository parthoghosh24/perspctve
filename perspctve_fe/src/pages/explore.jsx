import React from 'react'
import Post from '../components/posts/Post'

const explore = () => {
  return (
    <div className="flex w-full justify-center items-center mt-10">
      <ul>
        <li><Post></Post></li>
        <li><Post></Post></li>
        <li><Post></Post></li>
        <li><Post></Post></li>
      </ul>
    </div>
  )
}

export default explore
