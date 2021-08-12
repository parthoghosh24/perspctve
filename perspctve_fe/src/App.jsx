import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Explore from './pages/explore'
import PostNew from './pages/postNew'
import Navbar from './components/common/Navbar';
import Profile from './pages/profile'
import Post from './pages/post'
import UserContext from './components/contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ErrorContext from './components/contexts/ErrorContext';

const App = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({});

  const initialUserState = localStorage.length >0 ? {
      
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      username: localStorage.getItem('username'),
      avatar: localStorage.getItem('avatar')
  } : {}

  const [user, setUser] = useState(initialUserState);
  let userLength = Object.keys(user).length

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  const closeError = ()=>{
    setError({});
  }

  const errorOccured = Object.keys(error).length; 
  console.log(error)

  return (
    <ErrorContext.Provider value = {{error, setError}}>
      <UserContext.Provider value ={{user, setUser}}>
        <div className="relative min-h-screen flex font-serif">
          <Navbar toggle={toggle} isOpen = {isOpen}/>
          <Switch>
            <Route exact path="/">
              {userLength > 0 ? <Redirect to ='/profile'/> : <Home/>}
            </Route>
            <Route path="/profile" exact>
              {userLength === 0 ? <Redirect to ='/'/> : <Profile/>}
            </Route>
            <Route path="/opinions/new" exact>
              {userLength === 0 ? <Redirect to ='/'/> : <PostNew/>}
            </Route>
            <Route path="/explore" exact component={Explore} />
            <Route path="/about" exact component={About} />
            <Route path="/opinions/:uuid" children={Post} />
            <Route path="/:uuid" children = {Profile}/>
            
            
          </Switch>
          {
            errorOccured > 0 ?
            <footer class="fixed flex w-full bg-red-500 text-white bottom-0 items-center justify-center text-xl p-2">
            {error.message}
            <button className="ml-4" onClick={()=>closeError()}><FontAwesomeIcon icon = {faTimesCircle}/></button>
          </footer>  :
          ''
          }
          
        </div>
      </UserContext.Provider>
    </ErrorContext.Provider>
  );
}

export default App;
