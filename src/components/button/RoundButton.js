import React from 'react';

const RoundButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default RoundButton;
