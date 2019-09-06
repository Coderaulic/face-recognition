import React from 'react';
import Tilt from 'react-tilt';
import faceIcon from './facial-recognition-icon.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }}>
        <div className="Tilt-inner pa3">
          <img alt='icon not found' src={ faceIcon }></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
