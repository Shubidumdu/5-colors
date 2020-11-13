import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  padding-top: 6rem;
  max-width: 420px;
  margin: 0 auto;
`;

const Inner = styled.div`
  box-shadow: 0px 1px 6px lightgrey;
  border-radius: 1rem;
`;

const Card = ({ children, ...rest }) => {
  return (
    <Container className="section" {...rest}>
      <Inner className="container">{children}</Inner>
    </Container>
  );
};

export default Card;
