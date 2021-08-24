import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Explore from './pages/explore'
import PostNew from './pages/postNew'
import Navbar from './components/common/Navbar';
import User from './pages/user'
import Profile from './pages/profile'
import OnePost from './pages/post'
import UserContext from './components/contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ErrorContext from './components/contexts/ErrorContext';
import { fingerPrint } from './fingerprintjs/index';
import {Helmet} from 'react-helmet'
 
const App = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({});

  const initialUserState = localStorage.length >0 && localStorage.getItem('first_name') ? {
      
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      username: localStorage.getItem('username'),
      avatar: localStorage.getItem('avatar')
  } : {}

  const [user, setUser] = useState(initialUserState);
  let userLength = Object.keys(user).length;


  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  const closeError = ()=>{
    setError({});
  }

  fingerPrint
        .then(fp => fp.get())
        .then(result =>{
          localStorage.setItem('fingerprint', result.visitorId);
        });

  const errorOccured = Object.keys(error).length; 

  return (
    <ErrorContext.Provider value = {{error, setError}}>
      <UserContext.Provider value ={{user, setUser}}>
        <div className="relative min-h-screen flex font-serif">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Perspctve - An opinion based social network</title>
              <link rel="canonical" href={`${process.env.REACT_APP_DOMAIN}`} />
              <meta name="description"
                content="Perspctve is an opinion based social network which enables users to share their opinions without getting trolled."
              />
                <meta property="og:title" content="Perspectve - An opinion based social network" />
                <meta property="og:image" content={'/images/perspctve.png'} />
                <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}`} />
                <meta property="og:description" content='Perspctve is an opinion based social network which enables users to share their opinions without getting trolled.' />
                <meta property="twitter:title" content="Perspectve - An opinion based social network"/>
                <meta property="twitter:card" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
                <meta property="twitter:description" content='Perspctve is an opinion based social network which enables users to share their opinions without getting trolled.' />
          </Helmet>
          <Navbar toggle={toggle} isOpen = {isOpen}/>
            <Switch>
              <Route exact path="/">
                {userLength > 0 ? <Redirect to ='/profile'/> : <Home/>}
              </Route>
              <Route path="/profile" exact>
                {userLength === 0 ? <Redirect to ='/'/> : <Profile/>}
              </Route>
              <Route path="/opinions/new">
                {userLength === 0 ? <Redirect to ='/'/> : <PostNew/>}
              </Route>
              <Route path="/opinions/:uuid" component={OnePost}/>
              <Route exact path="/explore" component={Explore} />
              <Route path="/about" exact component={About} />
              <Route path="/:username" component = {User}/>
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
