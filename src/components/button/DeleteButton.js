import React from 'react';

const DeleteButton = ({ onClick, size }) => {
  return <button onClick={onClick} className={`delete is-${size}`} />;
};

export default DeleteButton;
