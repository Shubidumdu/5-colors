import React from 'react';

const AddButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button is-primary">
      {children}
    </button>
  );
};

export default AddButton;
