import React from 'react';
import styled from 'styled-components';
import RoundButton from '../button/RoundButton';
import Logo from '../image/Logo';

const Container = styled.header`
  width: 100%;
  height: 6rem;
`;

const LogoContainer = styled.div``;

const LogoWrap = styled.span``;

const LogoTitle = styled.span``;

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
