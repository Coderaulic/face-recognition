import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import particleOptions from './particlesOptions';
import Rank from '../src/components/rank/Rank';
import Logo from '../src/components/logo/Logo';
import Navigation from '../src/components/navigation/Navigation';
import ImageLinkForm from '../src/components/imageLinkForm/ImageLinkForm';
import FaceRecognition from '../src/components/faceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({ apiKey: '2743498df09f424f9870c8879539ef9e' });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onBtnSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    if (this.state.input) {
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input )
        .then((response) => {
          console.log('response: ', response.outputs[0].data.regions[0].region_info.bounding_box);
        }).catch((err) => {
          // there was an error
        }
      );
    }
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={ this.onInputChange } onBtnSubmit={ this.onBtnSubmit }
        />
        <Particles className='particles' params={ particleOptions } />
        <FaceRecognition imgUrl={ this.state.imgUrl } />
      </div>
    );
  }
}

export default App;
