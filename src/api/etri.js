import axios from "axios";

const URL = "http://aiopen.etri.re.kr:8000/HumanParsing";

const CATEGORIES = [
  "coat",
  "dress",
  "hair",
  "hat",
  "pants",
  "skirt",
  "upcloth",
];

export const analyzeImage = async ({ type, file }) => {
  try {
    const ACCESS_KEY = process.env.REACT_APP_ETRI_KEY;
    const res = await axios.post(URL, {
      access_key: ACCESS_KEY,
      argument: {
        type: "png",
        file,
      },
    });
    const result = res.data.return_object.results;
    console.log(result);
    const parsed = JSON.parse(result);
    console.log(parsed);
    const person = parsed.person_1;
    const colors = CATEGORIES.reduce((prev, val, idx) => {
      if (person[`${val} mask`] !== "None")
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
