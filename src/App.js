import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particleOptions from './particlesOptions';
import Navigation from '../src/components/navigation/Navigation';
import Logo from '../src/components/logo/Logo';
import ImageLinkForm from '../src/components/imageLinkForm/ImageLinkForm';
import Rank from '../src/components/rank/Rank';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <Particles className='particles' params={ particleOptions } />
        { /* <FaceRecognition /> */ }
      </div>
    );
  }
}

export default App;
