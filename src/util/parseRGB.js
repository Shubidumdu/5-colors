const parseRGB = (rgb) => {
  const replaced = rgb.replace("(", "[").replace(")", "]");
  const parsed = JSON.parse(replaced);
  return parsed;
};

export default parseRGB;
