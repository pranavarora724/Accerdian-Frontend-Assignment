import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useState } from 'react';

function App() 
{

  const [displayModal , setDisplayModal] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero displayModal={displayModal} setDisplayModal={setDisplayModal}></Hero>
      <Hero2 displayModal={displayModal} setDisplayModal={setDisplayModal}></Hero2>
      <FAQ displayModal={displayModal} setDisplayModal={setDisplayModal}></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
