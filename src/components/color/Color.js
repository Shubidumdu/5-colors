import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: 2px solid lightgrey;
  background: ${({ $background }) => $background};
`;

const Color = ({ color, ...rest }) => {
  const parsedColor = /\(.*\)/.test(color) ? `rgb${color}` : color;

  return (
    <ColorCircle data-testid="color" $background={parsedColor} {...rest} />
  );
};

export default Color;
