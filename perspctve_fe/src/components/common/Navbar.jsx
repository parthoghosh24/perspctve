import React, {useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompass, faInfoCircle, faPenNib, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../contexts/UserContext'


const Navbar = ({ toggle, isOpen }) => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  let userLoggedIn = Object.keys(user).length > 0
  const handleLogout = ()=>{
    toggle();
    setUser({});
    localStorage.clear();
    history.replace("/profile")
  }
  
  return (
    <>
    <nav className="fixed flex w-full pt-5 items-center justify-between text-white bg-blue-800 z-20" role="navigation">
      <Link to="/" className="pl-8 text-white font-extrabold text-2xl lg:text-3xl">Perspctve</Link>
      <div className="pr-8 inset-0 right-0">
        <div className="float-left">
        {
          userLoggedIn ?
          <Link to="/opinions/new" className="text-gray-50 text-xl mr-4 lg:text-2xl md:mr-1 hover:text-blue-600">
            <FontAwesomeIcon icon={faPenNib}/>
        </Link> : ''
        }  
        
        </div>
        <div className="float-left">
        <Link to ="#"  onClick={toggle}>
          <svg className="w-8 h-8 text-4xl lg:ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </Link>
        </div>
      </div>
    </nav>
    <aside className={isOpen? "top-0 right-0 w-64 bg-white fixed h-full overflow-auto z-30 " : "hidden"} >
      <div className="flex flex-col w-full justify-center items-center bg-blue-700 p-1 text-2xl lg:text-xl h-32 text-white">
        <Link className="md:text-3xl" to ="/" onClick={toggle}>
          {
            !userLoggedIn ?
            <FontAwesomeIcon icon={faUserCircle}/>
            :
            <img src={localStorage.getItem('avatar')} className="rounded-full w-9 ring-4" alt="author"/>
          }
          
        </Link>
        <Link className="" to ="/" onClick={toggle}>
          {
            !userLoggedIn ?
            <p>Sign in</p>
            :
            <p>{`${user.first_name} ${user.last_name}`}</p>
          }
          
        </Link>
      </div>
      <div className="mt-3 items-center text-blue-800 p-1 text-xl hover:bg-blue-800 hover:text-white">
        <Link to ="/explore" onClick={toggle}>
          <FontAwesomeIcon icon={faCompass}/> <span>Explore</span> 
        </Link>
      </div>
      <div className="mt-3 items-center text-blue-800 p-1 text-xl hover:bg-blue-800 hover:text-white">
        <Link to ="/about" onClick={toggle}>
          <FontAwesomeIcon icon={faInfoCircle}/> <span>About</span>
        </Link>
      </div>
      <div className="fixed w-full bottom-0 text-blue-800 p-1 text-lg mb-20 hover:bg-blue-800 hover:text-white">
        {
          userLoggedIn ?
          <Link to ="#" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt}/> <span>Sign out</span>
          </Link>
          :
          ''  
        }

      </div>
      <div className="fixed w-full mt-10 bottom-0 text-blue-800 text-lg">
        <p className="w-full pl-10 items-center">Perspctve © 2021</p>
      </div>
    </aside>
    <div className={isOpen ? "fixed w-full h-full bg-black bg-opacity-30 z-20" : "hidden"} onClick={ toggle }></div>
    </>
    
    
  )
}

export default Navbar
