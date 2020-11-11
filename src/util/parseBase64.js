const parseDataURL = (dataURL) => {
  const [data, base64] = dataURL.split(",");
  const imageType = "png";

  return {
    type: imageType,
    file: base64,
  };
};

export default parseDataURL;
