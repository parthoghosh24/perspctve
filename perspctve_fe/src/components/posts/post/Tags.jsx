import React from 'react'

const Tags = (props) => {
  return (
    <div className="mt-3 p-0.5 flex flex-wrap text-xs md:text-lg">
        {
          props.tags.map((tag, _idx)=>
          <span className="ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md">{`#${tag.title}`}</span>
        )}
    </div>
  )
}

export default Tags
