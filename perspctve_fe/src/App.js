import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Explore from './pages/explore'
import Navbar from './components/common/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative min-h-screen flex font-serif">
      <Navbar toggle={toggle} isOpen = {isOpen}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/explore" exact component={Explore} />
      </Switch>
    </div>
  );
}

export default App;
