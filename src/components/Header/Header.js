import React from 'react';
import logo from '../../assets/Logo/BrainFlix-logo.svg'
import image from '../../assets/Images/Mohan-muruge.jpg'


function Header() {
    return (
      <div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <input  placeholder="Search"/>
          <img src={image} alt='avatar of man' />
        </div>
        <div>
          <button placeholder='UPLOAD'></button>
        </div>
      </div>
    )


}

export default Header;