import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const Input = styled.input``;

const CheckBox = ({ ...rest }) => {
  return (
    <Label className="checkbox is-large" {...rest}>
      <Input type="checkbox" />
    </Label>
  );
};

export default CheckBox;
