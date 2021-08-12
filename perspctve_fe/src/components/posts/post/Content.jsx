import React from 'react' 
import ReactMarkdown from 'react-markdown'
import Editor from 'rich-markdown-editor'
import light from '../../posts/createPost/theme';

const Content = (props) => {
  return (
    <div className="p-2 text-1xl md:text-3xl mt-4">
      <Editor theme= {light} value={props.content} readOnly={true}/>
    </div>
  )
}

export default Content
