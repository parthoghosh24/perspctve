import { faPaperPlane, faPlane, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Editor from 'rich-markdown-editor'

const CreatePost = () => {
  return (
    <div className="bg-white lg:rounded-lg w-full md:max-w-3xl lg:mt-10">
      <form>
        {/* Title Form */}
        <div>
          <input className="lg:rounded-lg mt-0 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-2xl md:text-4xl font-bold mb-2" placeholder="Provide a title."/>
          {/* <h1 className="pt-4 px-1 text-2xl md:text-4xl font-bold mb-10">
            Click to provide a title to your opinion.
          </h1> */}
        </div>
        {/* Media */}
        <div className="rounded-lg p-1">
          <div className="w-full text-center justify-between">
            <p className="border-dashed border-4 p-2 text-gray-600 text-2xl"> Click to add media</p>
          </div>
        </div>
        {/*  Author */}
        <div className="mt-1 p-3 items-center justify-between flex">
          <div className="left-0">
            <img src={'images/author.js'} className="rounded-full w-7 float-left" alt="author"/>
            <span className="font-semibold">Partho Ghosh</span>
          </div>
          <div className="right-0">
            <p className="font-semibold text-gray-400">1 hours ago</p>
          </div>
        </div>
        {/* Content  */}
        <div className="p-2 text-1xl md:text-3xl mt-4 h-60">
          <Editor placeholder="Add your opinion piece."  theme={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"}}/>
        </div>
        {/* tags */}
        <div className="mt-3 p-0.5 flex flex-wrap text-xs md:text-lg">
          <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#add</span>
          <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">#tags</span>
        </div>
        {/* Buttons */}
        <div className="mt-10 pb-10 p-3 items-center justify-between flex z-20">
          <div className="w-full">
            <button className="p-3 ml-1 text-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-black hover:border-blue-800">
              <FontAwesomeIcon icon={faTrash}/> Discard
            </button>
            <button className="p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
              <FontAwesomeIcon icon={faSave}/> Draft it
            </button>
            <button className="right-0 p-3 ml-1 text-white bg-blue-800 lg:text-1xl border-2 border-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800">
              <FontAwesomeIcon icon={faPaperPlane}/> Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
