import React, { useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

const Cropper = ({ src, onCrop, ...rest }) => {
  const [crop, setCrop] = useState({
    unit: '%',
    aspect: 9 / 16,
  });

  const onChange = (newCrop) => {
    setCrop(newCrop);
  };

  return (
    <ReactCrop
      src={src}
      crop={crop}
      onChange={onChange}
      onComplete={onCrop}
      {...rest}
    />
  );
};

export default Cropper;
