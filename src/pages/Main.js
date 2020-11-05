import React from 'react';
import styled from 'styled-components';
import Logo from '../image/Logo';
import Button from '../button/Button';

const Container = styled.div``;

const TopButtonWrap = styled.div``;

const TitleWrap = styled.div``;

const LogoContainer = styled.div``;

const ButtonWrap = styled.div``;

const Main = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onPictureStart = () => {};
  const onManualStart = () => {};

  return (
    <Container>
      <TopButtonWrap>
        <RoundButton onClick={onInfo}>i</RoundButton>
        <RoundButton onClick={onHelp}>?</RoundButton>
      </TopButtonWrap>
      <TitleWrap>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </TitleWrap>
      <ButtonWrap>
        <Button onClick={onPictureStart}>사진으로 이용하기</Button>
        <Button onClick={onManualStart}>직접 고르기</Button>
      </ButtonWrap>
    </Container>
  );
};

export default Main;
