import React from 'react';
import styled from 'styled-components';

const Container = styled.main``;

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
