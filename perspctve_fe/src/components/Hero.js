import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-6xl lg:text-8xl mb-20 text-white">
        Perspctve
      </h1>
      <p className="lg:text-4xl md:text-2xl sm:text-2xl text-white">
        Share your perspective.
      </p>
      <p className="lg:text-4xl md:text-2xl text-white">
        Discover what the world thinks.
      </p>
      <Link className="mt-10 py-4 px-6 bg-gray-50 ring-2 rounded-sm text-1xl md:text-2xl text-blue-800 hover:bg-blue-700 hover:text-gray-50" to="/">Sign in using <FontAwesomeIcon icon={ faLinkedin } /></Link>
    </div>
  )
}

export default Hero
