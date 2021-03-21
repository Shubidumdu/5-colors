import axios from "axios";

const URL = process.env.REACT_APP_COLORMIND_API;

export const combineColors = async (colors) => {
  try {
    const sliced = [...colors, "N", "N", "N", "N"].slice(0, 5);
    const body = {
      model: "default",
      input: sliced,
    };
    const res = await axios.post(URL, body);
    const result = res.data;
    return result;
  } catch (err) {
    throw err;
  }
};
