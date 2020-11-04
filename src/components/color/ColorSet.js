import React from 'react';
import styled from 'styled-components';
import Color from './Color';

const Container = styled.div``;

const ColorSet = ({ colors }) => {
  return (
    <Container data-testid="color-set">
      {colors.map((color, idx) => (
        <Color key={`${color}-${idx}`} color={color} />
      ))}
    </Container>
  );
};

export default ColorSet;
