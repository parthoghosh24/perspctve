import React from 'react'

const Author = () => {
  return (
    <div className="mt-1 p-3 items-center justify-between flex">
        <div className="left-0">
          <img src={'images/author.jpeg'} className="rounded-full w-7 float-left" alt="author"/>
          <span className="font-semibold">Partho Ghosh</span>
        </div>
        <div className="right-0">
          <p className="font-semibold text-gray-400">1 hours ago</p>
        </div>
    </div>
  )
}

export default Author
