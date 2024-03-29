import { faPenNib,faHeart,faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfileIntro = (props) => {
  return (
    <div className="flex flex-col justify-between items-center bg-white lg:rounded-lg pt-10  max-w-full md:max-w-3xl lg:mt-10 pb-10 px-5">
      <div className="pb-5">
          {
            props.user.username === 'anonymous' ?
            <>
              <FontAwesomeIcon icon={faUserCircle} className="rounded-full ring-4 ml-14 text-7xl md:text-7xl"/>
              <br/>
              <span className="font-semibold text-2xl text-blue-800">Anonymous User</span>
            </>
            :
            props.user.avatar === null ?
            <>
              <FontAwesomeIcon icon={faUserCircle} className="rounded-full ring-4 ml-14 text-7xl md:text-7xl text-blue-800"/>
              <br/>
              <span className="font-semibold text-2xl text-blue-800">{`${props.user.first_name} ${props.user.last_name}`}</span>
            </>
            :
            <>
              <img src={props.user.avatar} className="rounded-full w-20 ring-4 ml-10" alt="author"/>
              <span className="font-semibold text-2xl text-blue-800">{`${props.user.first_name} ${props.user.last_name}`}</span>
            </>
          }
          
      </div>
      <div className="grid grid-cols-2 gap-24 lg:gap-32">
        <div className="text-xl lg:text-2xl">
          <div className="p-3 ml-1 w-10 h-10 sm:w-12 sm:h-12 text-blue-800">
            <FontAwesomeIcon icon={faPenNib}/>
          </div>
          {
            props.user && props.user.stats ?
            <div className="text-blue-800 ml-2">
              {props.user.stats.opinions >=1000 ? `${props.user.stats.opinions/1000.0}k` : `${props.user.stats.opinions}`}
            </div>
            :
            <div className="text-blue-800 ml-2">
              0
            </div>
          }
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
          {
            props.user && props.user.stats ?
            <div className="text-blue-800 ml-4">
              {props.user.stats.agree_total >=1000 ? `${props.user.stats.agree_total/1000.0}k` : `${props.user.stats.agree_total}`}
            </div>
            :
            <div className="text-blue-800 ml-4">
              0
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileIntro
