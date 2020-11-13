import axios from 'axios';

const URL =
  'https://k8am1bcleh.execute-api.ap-northeast-2.amazonaws.com/2020-11-14/colormind';

export const combineColors = async (colors) => {
  try {
    const sliced = [...colors, 'N', 'N', 'N', 'N'].slice(0, 5);
    const body = {
      model: 'default',
      input: sliced,
    };
    const res = await axios.post(URL, body);
    const result = res.data;
    return result;
  } catch (err) {
    throw err;
  }
};
