import React from 'react'
import Editor from 'rich-markdown-editor'
import light from './theme';

const ContentEditor = () => {
  return (
    <div className="w-full h-32 md:h-64 overflow-auto p-2 text-1xl md:text-3xl mt-10 h-60">
      <Editor placeholder="Add your opinion piece... (required)" theme= {light}/>
    </div>
  )
}

export default ContentEditor
