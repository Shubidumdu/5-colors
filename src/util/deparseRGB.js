const deparseRGB = (rgb) => {
  const stringified = JSON.stringify(rgb);
  const replaced = stringified.replace("[", "(").replace("]", ")");
  return replaced;
};

export default deparseRGB;
