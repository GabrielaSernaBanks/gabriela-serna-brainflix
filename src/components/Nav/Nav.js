import React from 'react';
import logo from '../../assets/Logo/BrainFlix-logo.svg'
import image from '../../assets/Images/Mohan-muruge.jpg'
import upload from '../../assets/Icons/upload.svg'
import search from '../../assets/Icons/search.svg'
import './Nav.scss'

function Nav() {
    return (
        <div className='nav'>
            <div className='nav__logo'>
                <img className='nav__logo-image' src={logo} alt="Logo" />
            </div>
            <div className='nav__search'>
                <input className='nav__search-bar' placeholder="Search"/>
                <img className='nav__search-icon' src={search}></img>
                <img className='nav__search-image' src={image} alt='avatar of man' />
            </div>
            <div className='nav__upload'>
                <button className='nav__upload-button' placeholder='UPLOAD'>
                    <img src={upload}></img>
                    <span className='nav__upload-text'>UPLOAD</span>
                </button>
            </div>
        </div>
    )
}

export default Nav;