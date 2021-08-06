import React, { createRef, useState } from 'react'
import ReactTags from 'react-tag-autocomplete'
const Tags = () => {
  const [tags,setTags] = useState([{ id: 1, name: "#Apples" },
                                   { id: 2, name: "#Pears" }]);

  const [suggestions, setSuggestions] = useState([
    { id: 3, name: "#Bananas" },
    { id: 4, name: "#Mangos" },
    { id: 5, name: "#Lemons" },
    { id: 6, name: "#Apricots" }
  ])
  const reactTags = createRef();

  const onDelete = (idx)=>{
    const modifiedTags = [...tags];
    modifiedTags.splice(idx, 1);
    setTags(modifiedTags);  
  }

  const onAddition = (tag)=>{
    setTags([...tags, tag]);
  }

  return (
    <ReactTags
    ref = {reactTags}
    tags = {tags}
    suggestions = {suggestions}
    onDelete = {onDelete}
    onAddition ={onAddition}
    classNames = {{root: 'w-full',
                   selectedTag: 'ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md',
                   searchInput: 'placeholder-gray-400 mt-0 pt-4 px-1 border-0 border-b-2 border-gray-200 text-sm md:text-md font-bold'}}/>
  )
}

export default Tags
