import { faPenNib,faHeart,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { post } from '../../apis/api'

const ProfileIntro = (props) => {
  return (
    <div className="flex flex-col justify-between items-center bg-white lg:rounded-lg pt-10  max-w-full md:max-w-3xl lg:mt-10 pb-10 px-5">
      <div className="pb-5">
          <img src={props.userProfile.avatar} className="rounded-full w-20 ring-4 ml-10" alt="author"/>
          <span className="font-semibold text-2xl text-blue-800">{props.userProfile.name}</span>
      </div>
      <div className="grid grid-cols-2 gap-24 lg:gap-32">
        <div className="text-xl lg:text-2xl">
          <div className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-blue-800">
            <FontAwesomeIcon icon={faPenNib}/>
          </div>
          <div className="text-blue-800 ml-2">
            {props.userProfile.opinions >=1000 ? `${props.userProfile.opinions/1000.0}k` : `${props.userProfile.opinions}`}
          </div>
        </div>
        <div className="text-xl lg:text-2xl">
          <div>
            <div className="p-2 text-sm md:text-xl md:p-3 w-8 h-8 sm:w-12 sm:h-12 text-white rounded-full bg-green-700 float-left">
              <FontAwesomeIcon icon= {faHeart}/>
            </div>
            <div className="p-2 text-sm md:text-xl md:p-3 w-8 h-8 sm:w-12 sm:h-12 text-white rounded-full bg-green-400 float-left">
              <FontAwesomeIcon icon= {faThumbsUp}/>
            </div>
          </div>
          <div className="text-blue-800 ml-4">
            {props.userProfile.total_agreeing >=1000 ? `${props.userProfile.total_agreeing/1000.0}k` : `${props.userProfile.total_agreeing}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileIntro
