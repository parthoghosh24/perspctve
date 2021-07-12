import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative min-h-screen flex font-serif">
      <Navbar toggle={toggle} isOpen = {isOpen}/>
      <Hero/>
    </div>
  );
}

export default App;
