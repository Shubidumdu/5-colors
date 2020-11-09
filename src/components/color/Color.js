import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.span`
  background: ${({ $background }) => $background};
`;

const Color = ({ color, ...rest }) => {
  return <ColorCircle data-testid="color" $background={color} {...rest} />;
};

export default Color;
