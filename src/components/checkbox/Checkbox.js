import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const Input = styled.input``;

const CheckBox = ({ onClick }) => {
  return (
    <Label className="checkbox" onClick={onClick}>
      <Input type="checkbox" />
    </Label>
  );
};

export default CheckBox;
