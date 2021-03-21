import React from "react";

const CheckBox = ({ ...rest }) => {
  return (
    <label className="checkbox is-large" {...rest}>
      <input type="checkbox" />
    </label>
  );
};

export default CheckBox;
