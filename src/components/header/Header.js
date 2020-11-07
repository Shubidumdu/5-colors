import React from 'react';
import styled from 'styled-components';
import RoundButton from '../button/RoundButton';
import Logo from '../image/Logo';

const Container = styled.header`
  width: 100%;
  background: #fff;
  z-index: 1;
  position: fixed;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  box-shadow: 0px 1px 6px lightgrey;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 4rem;
`;

const LogoWrap = styled.div`
  align-self: center;
  width: 3rem;
  height: 3rem;
`;

const LogoTitle = styled.div`
  font-family: BMJUA;
  font-size: 2rem;
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
