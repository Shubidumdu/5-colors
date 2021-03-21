import axios from "axios";

const { REACT_APP_ETRI_KEY: ACCESS_KEY, REACT_APP_ETRI_API: URL } = process.env;

const CATEGORIES = ["coat", "dress", "hat", "pants", "skirt", "upcloth"];

export const analyzeImage = async ({ type, file }) => {
  try {
    const res = await axios.post(URL, {
      access_key: ACCESS_KEY,
      argument: {
        type: "png",
        file,
      },
    });
    const result = res.data.return_object.results;
    const parsed = JSON.parse(result);
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
    console.log(err);
    throw err;
  }
};
