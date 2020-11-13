import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  border: 2px solid lightgrey;
  background: ${({ $background }) => $background};

  @media (max-width: 280px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Color = ({ color, ...rest }) => {
  const parsedColor = /\(.*\)/.test(color) ? `rgb${color}` : color;

  return (
    <ColorCircle data-testid="color" $background={parsedColor} {...rest} />
  );
};

export default Color;
