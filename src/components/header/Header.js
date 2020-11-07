import React from 'react';
import styled from 'styled-components';
import RoundButton from '../button/RoundButton';
import Logo from '../image/Logo';

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 6rem;
`;

const LogoWrap = styled.div`
  align-self: center;
  margin-left: 0.5rem;
  width: 5rem;
  height: 5rem;
`;

const LogoTitle = styled.div`
  font-family: BMJUA;
  font-size: 3rem;
  display: flex;
  margin-left: 1rem;
  align-items: center;
`;

const ButtonWrap = styled.div``;

const Header = ({ onInfo, onHelp }) => {
  return (
    <Container>
      <LogoContainer>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <LogoTitle>오깔라</LogoTitle>
      </LogoContainer>
      <ButtonWrap>
        <RoundButton onClick={onInfo}>i</RoundButton>
        <RoundButton onClick={onHelp}>?</RoundButton>
      </ButtonWrap>
    </Container>
  );
};

export default Header;
