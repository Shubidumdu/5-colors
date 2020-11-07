import React from 'react';

const Button = ({ onClick, children, size = 'medium', ...rest }) => {
  return (
    <button onClick={onClick} className={`button is-${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
