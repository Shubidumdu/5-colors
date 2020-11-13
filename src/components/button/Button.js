import React from 'react';

const Button = ({ primary, onClick, children, size = 'medium', ...rest }) => {
  return (
    <a
      onClick={onClick}
      className={`button is-${size} ${primary ? 'is-primary' : ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
