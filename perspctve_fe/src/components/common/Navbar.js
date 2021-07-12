import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompass, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ toggle, isOpen }) => {
  return (
    <>
    <nav className="fixed w-16 h-full items-center justify-between text-white right-0" role="navigation">
      <Link to ="#" className="pl-8" onClick={toggle}>
      <svg className="w-8 h-8 text-4xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
      </Link>
    </nav>
    <aside className={isOpen? "top-0 right-0 w-64 bg-white fixed h-full overflow-auto z-30 " : "hidden"} >
      <div>
        <Link to ="#" className="pl-8" onClick={toggle}>
          <svg className="w-8 h-8 text-4xl text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </Link>
      </div>
      <div className="mt-7 items-center text-blue-700 p-1 text-xl hover:bg-blue-700 hover:text-white">
        <Link to ="/">
          <FontAwesomeIcon icon={faHome}/> <span>Home</span> 
        </Link>
      </div>
      <div className="mt-3 items-center text-blue-700 p-1 text-xl hover:bg-blue-700 hover:text-white">
        <Link to ="/explore">
          <FontAwesomeIcon icon={faCompass}/> <span>Explore</span> 
        </Link>
      </div>
      <div className="mt-3 items-center text-blue-700 p-1 text-xl hover:bg-blue-700 hover:text-white">
        <Link to ="/about" >
          <FontAwesomeIcon icon={faInfoCircle}/> <span>About</span>
        </Link>
      </div>
      <div className="fixed w-full bottom-0 flex pl-1 items-center text-blue-700 text-lg">
        <p>Perspctve © 2021</p>
      </div>
    </aside>
    <div className={isOpen ? "fixed w-full h-full bg-black bg-opacity-30 z-29" : "hidden"} onClick={ toggle }></div>
    </>
    
    
  )
}

export default Navbar
