import React, { Component } from 'react';
import './App.css';
import Navigation from '../src/components/navigation/Navigation';
import Logo from '../src/components/logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        { /*
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
