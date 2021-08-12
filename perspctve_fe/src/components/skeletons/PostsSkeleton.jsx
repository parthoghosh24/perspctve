import React from 'react'
import PostSkeleton from './PostSkeleton'

const PostsSkeleton = () => {
  const list = [1,2,3];

  return (
    <ul>
      <li><PostSkeleton/></li>
      <li><PostSkeleton/></li>
      <li><PostSkeleton/></li>
    </ul>
  )
}

export default PostsSkeleton
