import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.span`
  background: ${({ $background }) => $background};
`;

const Color = ({ color }) => {
  return <ColorCircle data-testid="color" $background={color} />;
};

export default Color;
