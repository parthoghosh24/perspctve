import { faCat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-10 w-screen md:w-dtop">
      <p className="text-6xl lg:text-8xl"><FontAwesomeIcon icon={faCat}/></p>
      <p className="text-4xl lg:text-6xl mt-5">Nothing!!</p>
      <p className="text-xl lg:text-4xl mt-10">No opinions to show.</p>
    </div>
  )
}

export default Empty
