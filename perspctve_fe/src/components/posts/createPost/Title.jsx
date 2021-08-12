import React, { useContext } from 'react'
import OpinionContext from '../../contexts/OpinionContext'

const Title = () => {
  const {opinion, setOpinion} = useContext(OpinionContext);

  const handleOnChange =(e)=>{
    let localOpinion = opinion
    localOpinion.title = e.target.value
    setOpinion(localOpinion)
  }
  return (
    <div>
      <textarea rows='2' cols='5' wrap='soft' value={opinion.title} onChange={handleOnChange} className="focus:ring-0 placeholder-gray-400 lg:rounded-lg mt-10 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 text-2xl md:text-4xl font-bold mb-2 text-blue-800 " maxLength='140' placeholder="Provide a title... (required)" required={true}/>
    </div>
  )
}

export default Title
