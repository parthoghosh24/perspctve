import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faPenNib, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
 
const Post = () => {
  return (
    <div className="bg-white rounded-lg  max-w-xs md:max-w-3xl mt-10">
      <div className="rounded-lg p-1">
      {/* <img src="https://d332juqdd9b8hn.cloudfront.net/wp-content/uploads/2019/07/GettyImages-487260560.jpg"
        className="rounded-lg w-full" alt="media"/> */}
      <img src="https://media.giphy.com/media/fURrelGwnYstQgKLvt/giphy.gif"
        className="rounded-lg w-full" alt="media"/>  
        {/* <div className="relative">
          <iframe className="inset-0 w-full h-96" src="https://www.youtube.com/embed/gOQ31Kc8H5E" title="video_media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> */}
      </div>
      <div className="mt-1 p-3 items-center justify-between flex">
        <div className="left-0">
          <img src={'images/author.jpeg'} className="rounded-full w-7 float-left" alt="author"/>
          <span className="font-semibold">Partho Ghosh</span>
        </div>
        <div className="right-0">
          <p className="font-semibold text-gray-400">1 hours ago</p>
        </div>
      </div>
      <div className="p-0.5 text-1xl md:text-3xl mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="mt-3 p-0.5 flex flex-wrap">
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#second</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#third</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#fourth</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#five</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#six</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#seven</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#eight</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
        <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#first</span>
      </div>
      <div className="mt-10 pb-10 p-3 items-center justify-between flex">
        <div className="left-0">
          <Link to="#" className="p-3 ml-1 w-24 h-24 text-white rounded-full bg-green-700">SA</Link>
          <Link to="#" className="p-3 ml-1 w-24 h-24 text-white rounded-full bg-green-700">A</Link>
          <Link to="#" className="p-3 ml-1 w-24 h-24 text-white rounded-full bg-green-700">NE</Link>
          <Link to="#" className="p-3 ml-1 w-24 h-24 text-white rounded-full bg-green-700">D</Link>
          <Link to="#" className="p-3 ml-1 w-24 h-24 text-white rounded-full bg-green-700">SD</Link>
        </div>
        <div className="right-0">
        <Link to="#" className="p-3 ml-1 text-black lg:text-2xl">
          <FontAwesomeIcon icon={faPenNib}/>
        </Link>
        <Link to="#" className="p-3 ml-1 text-black lg:text-2xl">
          <FontAwesomeIcon icon={faEllipsisV}/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
