const parseDataURL = (dataURL) => {
  const base64 = dataURL.split(',')[1];
  const imageType = 'png';

  return {
    type: imageType,
    file: base64,
  };
};

export default parseDataURL;
