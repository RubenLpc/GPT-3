import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Blog,Possibility, Features, WhatGPT3,Header } from './containers'
import {CTA, Brand, Navbar} from './components';

function App() {
  
  return (
    <>
     <div className="App">

<div className="gradient__bg">
  <Navbar />
  <Header />
</div>
<Brand />
<WhatGPT3 />
<Features />
<Possibility />
<CTA />
<Blog />
<Footer />
</div>
    </>
  )
}

export default App

/*

*/