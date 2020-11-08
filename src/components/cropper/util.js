import loadImage from 'blueimp-load-image';

export const getCroppedImg = async (image, crop) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const originWidth = crop.width * scaleX;
  const originHeight = crop.height * scaleY;

  const MAX_WIDTH = 1200;
  const MAX_HEIGHT = 1200 / (16 / 9);
  let targetWidth = originWidth,
    targetHeight = originHeight;
  if (originWidth > MAX_WIDTH || originHeight > MAX_HEIGHT) {
    if (originWidth / originHeight > MAX_WIDTH / MAX_HEIGHT) {
      targetWidth = MAX_WIDTH;
      targetHeight = Math.round(MAX_WIDTH * (originHeight / originWidth));
    } else {
      targetHeight = MAX_HEIGHT;
      targetWidth = Math.round(MAX_HEIGHT * (originWidth / originHeight));
    }
  }

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    targetWidth,
    targetHeight,
  );

  const TYPE = 'image/png';
  const base64 = canvas.toDataURL('image/png').split(',')[1];

  return {
    file: base64,
    type: TYPE,
  };
};
