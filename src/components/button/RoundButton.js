import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: bold;
  & + & {
    margin-left: 1rem;
  }
`;

const RoundButton = ({ onClick, children, ...rest }) => {
  return (
    <StyledButton className="button" onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default RoundButton;
