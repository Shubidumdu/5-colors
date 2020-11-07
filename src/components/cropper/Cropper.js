import React, { useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import Card from '../card/Card';

const Cropper = ({ src, onCrop }) => {
  const [crop, setCrop] = useState({
    aspect: 9 / 16,
  });
  const onChange = (newCrop) => {
    setCrop(newCrop);
  };
  return (
    <ReactCrop src={src} crop={crop} onChange={onChange} onComplete={onCrop} />
  );
};

export default Cropper;
