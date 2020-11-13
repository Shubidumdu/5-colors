import axios from 'axios';

const URL =
  'https://k8am1bcleh.execute-api.ap-northeast-2.amazonaws.com/2020-11-14/parseHuman';

const CATEGORIES = ['coat', 'dress', 'hat', 'pants', 'skirt', 'upcloth'];

export const analyzeImage = async ({ type, file }) => {
  try {
    const ACCESS_KEY = process.env.REACT_APP_ETRI_KEY;
    const res = await axios.post(URL, {
      access_key: ACCESS_KEY,
      argument: {
        type: 'png',
        file,
      },
    });
    const result = res.data.return_object.results;
    const parsed = JSON.parse(result);
    const person = parsed.person_1;
    const colors = CATEGORIES.reduce((prev, val, idx) => {
      if (person[`${val} mask`] !== 'None')
        return [
          ...prev,
          {
            type: val,
            color: person[`${val} color`],
          },
        ];
      return prev;
    }, []);
    return colors;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
