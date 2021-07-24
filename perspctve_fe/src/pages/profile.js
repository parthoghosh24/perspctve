import React from 'react'
import Profile from '../components/home/Profile'
import Post from '../components/posts/Post'

const profile = () => {
  return (
    <div className="flex w-full justify-center items-center mt-10">
      <ul>
        <li><Profile></Profile></li>
        <li><Post></Post></li>
        <li><Post></Post></li>
        <li><Post></Post></li>
        <li><Post></Post></li>
      </ul>
    </div>
  )
}

export default profile
