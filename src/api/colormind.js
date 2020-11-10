import axios from "axios";

const URL = "http://colormind.io/api";

export const combineColors = async (colors) => {
  try {
    const rgb2Arr = colors.map(({ rgb: { r, g, b }, hex }) => [r, g, b]);
    const sliced = [...rgb2Arr, "N", "N", "N", "N"].slice(4);
    const body = {
      model: "default",
      input: sliced,
    };

    const res = await axios.post(URL, body);
    const result = res.data.result;
    console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};
