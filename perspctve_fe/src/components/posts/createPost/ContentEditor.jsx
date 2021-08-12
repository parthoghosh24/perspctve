import React, { useContext } from 'react'
import Editor from 'rich-markdown-editor'
import OpinionContext from '../../contexts/OpinionContext';
import light from './theme';

const ContentEditor = () => {
  const {opinion, setOpinion} = useContext(OpinionContext);

  return (
    <div className="w-full h-32 md:h-64 overflow-auto p-2 text-1xl md:text-3xl mt-10 h-60">
      <Editor placeholder="Add your opinion piece... (required)" theme= {light} onChange ={getValue=>{
        const value = getValue();
        let localOpinion = opinion
        localOpinion.body = value
        setOpinion(localOpinion)
      }} value={opinion.body}/>
    </div>
  )
}

export default ContentEditor
