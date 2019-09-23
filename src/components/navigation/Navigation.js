import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={ onRouteChange.bind(this, 'signin') } className='white f3 link dim black underlined pa3 pointer'>
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={ onRouteChange.bind(this, 'signin') } className='white f3 link dim black underlined pa3 pointer'>
          Sign In
        </p>
        <p onClick={ onRouteChange.bind(this, 'register') } className='white f3 link dim black underlined pa3 pointer'>
          Register
        </p>
    </nav>
    );
  }
};

export default Navigation;
