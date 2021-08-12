import React, { createRef, useContext, useState } from 'react'
import ReactTags from 'react-tag-autocomplete'
import { tagSearch } from '../../../apis/tagsService';
import OpinionContext from '../../contexts/OpinionContext';
const Tags = () => {
  const [tags,setTags] = useState([]);

  const [loading, setLoading] = useState(false);

  const [suggestions, setSuggestions] = useState([]);

  const {opinion, setOpinion} = useContext(OpinionContext);

  const reactTags = createRef();

  const onDelete = (idx)=>{
    const localOpinion = opinion;
    const modifiedTags = [...tags];
    let localTags = []
    modifiedTags.splice(idx, 1);
    modifiedTags.forEach(element => {
      localTags.push(element.name)
    });
    setTags(modifiedTags);
    localOpinion.tags = localTags;
    console.log(localOpinion.tags);
    setOpinion(localOpinion);
  }

  const onAddition = (tag)=>{
    const localOpinion = opinion;
    console.log(tag)
    if(localOpinion.tags)
    {
      localOpinion.tags.push(tag.name)
    }
    else
    {
      localOpinion.tags = [tag.name];  
    }
     
    console.log(localOpinion.tags);
    setOpinion(localOpinion);
    setTags([...tags, tag]);
  }

  const handleOnChange = (query)=>{
    setLoading(true);
    if(query.length > 0)
    {
      tagSearch(query).then((response)=>{
        setLoading(false);
        const modifiedSuggestions = [];
        for (let index = 0; index < response.data.length; index++) {
          let term = {name: response.data[index].title, id: response.data[index].id};
          modifiedSuggestions.push(term);
        }
        setSuggestions(modifiedSuggestions);
      }).catch((error)=>{
        console.log(error);
      });

    }
  }

  return (
    <ReactTags
    ref = {reactTags}
    tags = {tags}
    suggestions = {suggestions}
    onDelete = {onDelete}
    placeholderText="Add relevant tags for your opinion"
    onAddition ={onAddition}
    allowNew = {true}
    allowBackspace = {true}
    onInput = {handleOnChange}
    classNames = {{root: 'w-full p-2',
                   selectedTag: 'ml-2 mt-1 p-1 bg-indigo-700 text-white rounded-md',
                   search: 'w-full',
                   searchInput: 'w-28 mt-4 rounded-none focus:ring-0 placeholder-gray-400 mt-0 pt-4 border-0 border-b-2 border-gray-200 text-sm md:text-md font-bold',
                   suggestions:  'p-2 text-gray-400'}}/>
  )
}

export default Tags
