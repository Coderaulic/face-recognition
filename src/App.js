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
      imgUrl: '',
      boxes: [],
      error: null,
      isValidURL: true
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  calcFaceLocation = (data) => {
    const faceLocations = [];
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    if (Object.keys(data.outputs[0].data).length) {
      data.outputs[0].data.regions.forEach(region => {
        const locData = region.region_info.bounding_box;
        faceLocations.push({
          leftCol: locData.left_col * width,
          topRow: locData.top_row * height,
          rightCol: width - (locData.right_col * width),
          bottomRow: height - (locData.bottom_row * height)
        });
      });
    }
    return faceLocations;
  }

  drawFaceBoxes = (boxCords) => {
    // this triggers re-render and draws the boxes
    this.setState({ boxes: boxCords });
  }

  onBtnSubmit = () => {
    this.setState({
      boxes: [],
      error: null,
      imgUrl: this.state.input
    });
    if (this.state.input) {
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => this.drawFaceBoxes(this.calcFaceLocation(response)))
        .catch(err => {
          this.setState({ error: err });
        });
    }
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onBtnSubmit={ this.onBtnSubmit }
          onInputChange={ this.onInputChange }
        />
        <Particles className='particles' params={ particleOptions } />
        <FaceRecognition
          boxes={ this.state.boxes }
          error={ this.state.error }
          imgUrl={ this.state.imgUrl }
          validURL={ this.state.isValidURL }
        />
      </div>
    );
  }
}

export default App;
