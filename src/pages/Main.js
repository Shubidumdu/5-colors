import React from 'react';
import styled from 'styled-components';
import Logo from '../components/image/Logo';
import Button from '../components/button/Button';
import RoundButton from '../components/button/RoundButton';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const TopButtonWrap = styled.div`
  width: 100%;
  display: flex;
  margin-right: 2rem;
  height: 5rem;
  align-items: center;
  justify-content: flex-end;
`;

const TitleWrap = styled.div`
  width: 12rem;
  font-family: 'BMJUA';
  font-size: 3rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  font-family: 'BMJUA';
`;

const ButtonWrap = styled.div``;

const Main = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onPictureStart = () => {};
  const onManualStart = () => {};

  return (
    <Container>
      <TopButtonWrap className="">
        <RoundButton onClick={onInfo}>i</RoundButton>
        <RoundButton onClick={onHelp}>?</RoundButton>
      </TopButtonWrap>
      <TitleWrap className="section">
        <LogoContainer>
          <figure className="image is-square">
            <Logo />
          </figure>
          <span>오깔라</span>
        </LogoContainer>
      </TitleWrap>
      <ButtonWrap className="section buttons is-centered">
        <Button onClick={onPictureStart}>사진으로 이용하기</Button>
        <Button onClick={onManualStart}>직접 고르기</Button>
      </ButtonWrap>
    </Container>
  );
};

export default Main;
