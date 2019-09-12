import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      <p className='white f3'>
        { 'This app will detect faces in your images. Give it a try.' }
      </p>
      <div className='center'>
        <div className='form pa4 center br3 shadow-5'>
          <input
            type='text'
            placeholder={ 'Enter URL...' }
            className='f4 pa2 w-70 center'
            onChange={ onInputChange }
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'
            onClick={ onBtnSubmit }
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;