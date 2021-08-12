import React, { useContext } from 'react'
import OpinionContext from '../../contexts/OpinionContext';

const AnonymousToggle = () => {
  const {opinion, setOpinion} = useContext(OpinionContext);

  const handleOnClick = (e)=>{
    let localOpinion = opinion
    localOpinion.checked = e.target.checked
    setOpinion(localOpinion);
  }

  return (
    <div className="pl-5 text-gray-400 font-medium mt-5">
      <input type='checkbox' checked = {opinion.isAnonymous} className="focus:ring-0 appearance-none checked:bg-blue-600 checked:border-transparent" onClick = {handleOnClick}/> Post as Anonymous
    </div>
  )
}

export default AnonymousToggle
