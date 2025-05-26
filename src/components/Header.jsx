



import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
  return (
    <div className='headTop'>
        <img className='headimg' src="/shivababa.png" alt="logo" width={60} height={60} />
        <h1>Om Shanthi</h1>
        

        <div className='headlist'>
            <ul>
              <li><Link to="/" id="nav-home">Home</Link></li>
              <li><Link to="/aboutus" id="nav-aboutus">About Us</Link></li>
              <li><Link to="/meditation" id="nav-meditation">Meditation</Link></li>
              <li><Link to="/address" id="nav-address">Address</Link></li>
              <li><Link to="/gallery" id="nav-gallery">Gallery</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header