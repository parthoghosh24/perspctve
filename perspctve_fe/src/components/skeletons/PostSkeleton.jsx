import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PostSkeleton = () => {
  return (
    <div className="bg-white lg:rounded-lg flex flex-col lg:mt-10 w-screen md:w-dtop">
        <div className="p-5">
          <Skeleton width={'100%'}  height={'50px'}/> 
        </div>
        <div className="p-5 mt-3">
          <Skeleton width={'100%'}  height={'250px'}/> 
        </div>
        <div className="p-5 mt-3 ">
          <div className="left-0">
            <Skeleton circle={true} height={30} width={30} className="float-left" />
            <Skeleton width={'20%'} className="ml-2"/>
          </div>
          <div className="right-0">
            <Skeleton width={'20%'} className="float-right"/>
          </div>
        </div>
        <div className="p-5 mt-3">
          <Skeleton count={5} height={'30px'} className="mt-2"/> 
        </div>
    </div>
  )
}

export default PostSkeleton
