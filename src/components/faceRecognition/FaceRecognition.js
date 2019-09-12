import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, boxes, error }) => {
  if (error) {
    return (
      <div className='mt4 white f3'>
        { 'The requested URL didn\'t have an image or an invalid input was entered.' }
      </div>
    );
  }

  const boundingBoxes = boxes.map((face, index) => {
    return (
      <div
        className='bounding-box'
        key={ 'face_' + index }
        style={{
          top: face.topRow,
          right: face.rightCol,
          bottom: face.bottomRow,
          left: face.leftCol
        }}>
      </div>
    );
  });

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={ imgUrl } />
        { boundingBoxes }
      </div>
    </div>
  );
};

export default FaceRecognition;
