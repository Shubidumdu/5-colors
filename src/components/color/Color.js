import React from "react";
import styled from "styled-components";

const ColorCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: 2px solid lightgrey;
  background: ${({ $background }) => $background};
  cursor: pointer;
`;

const Color = ({ color, ...rest }) => {
  return <ColorCircle data-testid="color" $background={color} {...rest} />;
};

export default Color;
