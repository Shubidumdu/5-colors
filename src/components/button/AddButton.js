import React from "react";
import { MdAdd } from "react-icons/md";

const AddButton = ({ onClick, children, ...rest }) => {
  return (
    <button onClick={onClick} className="button is-primary" {...rest}>
      <MdAdd />
      {children}
    </button>
  );
};

export default AddButton;
