import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'

const Menu = () => (
        <>
        <p><a href="#home" className="" >Home</a></p>
        <p><a href="#wgpt3" className="" >What is GPT3</a></p>
        <p><a href="#possibility" className="" >Open AI</a></p>
        <p><a href="#features" className="" >Case Studies</a></p>
        <p><a href="#blog" className="" >Library</a></p>
        </>
 )
function Navbar() {
const [toggleMenu, setToggleMenu] =useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
          <img src={logo} />
      </div>
      <div className="gpt3__navbar-links_container">
        <Menu />

      </div>
      
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'> Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links ">
                <Menu />
                  <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'> Sign up</button>
                </div>
              
              </div>
            </div>
            
          )
        }
      </div>
    </div>
  )
}

export default Navbar
