import axios from "axios";

const URL =
  "https://k8am1bcleh.execute-api.ap-northeast-2.amazonaws.com/2020-11-11/colormind";

export const combineColors = async (colors) => {
  try {
    const rgb2Arr = colors.map(({ rgb: { r, g, b }, hex }) => [r, g, b]);
    const sliced = [...rgb2Arr, "N", "N", "N", "N"].slice(0, 5);
    console.log(sliced);
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
