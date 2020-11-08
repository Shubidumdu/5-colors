import axios from 'axios';

const URL = 'http://aiopen.etri.re.kr:8000/HumanParsing';

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
    const replaced = result
      .replace('\\n', '')
      .replace('\n', '')
      .replace('\t', '');
    const parsed = JSON.parse(replaced);
    // if (Object.keys(parsed).length > 1) throw new Error('so many persons');
    const person = parsed.person_1;
    console.log(person);
    const colors = CATEGORIES.reduce((prev, val, idx) => {
      console.log(val);
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
    throw err;
  }
};
