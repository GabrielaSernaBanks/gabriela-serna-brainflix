import React from 'react';
import logo from '../../assets/Logo/BrainFlix-logo.svg'
import image from '../../assets/Images/Mohan-muruge.jpg'
import search from '../../assets/Icons/search.svg'
import upload from '../../assets/Icons/upload.svg'
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
            </div>
            <img className='nav__search-image' src={image} alt='avatar of man' />
            <div className="upload">
                <img className='nav__search-image--tablet' src={image} alt='avatar of man' />
                <button className="upload__button" placeholder="UPLOAD">
                    <img src={upload}></img>
                    <span className="upload__button-text">UPLOAD</span>
                </button>
            </div>
        </div>
    )
}

export default Nav;

