import React from 'react';

const Button = ({ onClick, children, size = 'medium', ...rest }) => {
  return (
    <a onClick={onClick} className={`button is-${size}`} {...rest}>
      {children}
    </a>
  );
};

export default Button;
