import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button is-primary">
      {children}
    </button>
  );
};

export default Button;
