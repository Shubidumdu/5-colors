import React from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

const StyledPicker = styled(ChromePicker)`
  width: 100% !important;
  box-shadow: none !important;
  touch-action: none;
`;

const ColorPicker = ({ ...rest }) => {
  return <StyledPicker disableAlpha={true} {...rest} />;
};

export default ColorPicker;
