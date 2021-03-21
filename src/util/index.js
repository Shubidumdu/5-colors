export const stringifyRGB = (rgb) => {
  const stringified = JSON.stringify(rgb);
  const replaced = stringified.replace("[", "(").replace("]", ")");
  return replaced;
};

export const parseRGB = (rgb) => {
  const replaced = rgb.replace("(", "[").replace(")", "]");
  const parsed = JSON.parse(replaced);
  return parsed;
};

export const parseDataURL = (dataURL) => {
  const base64 = dataURL.split(",")[1];
  const imageType = "png";

  return {
    type: imageType,
    file: base64,
  };
};

export const convertRgbToArr = (rgb) => {
  const { r, g, b } = rgb;
  return [r, g, b];
};
