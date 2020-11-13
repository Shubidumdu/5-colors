import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/image/Logo';
import Button from '../components/button/Button';
import RoundButton from '../components/button/RoundButton';
import { useHistory } from 'react-router-dom';
import InfoModal from '../components/info/InfoModal';
import HelpModal from '../components/help/HelpModal';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 425px;
  margin: 0 auto;
`;

const TopButtonWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1rem;
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
  const history = useHistory();

  const [info, setInfo] = useState(false);
  const [help, setHelp] = useState(false);
  const onInfo = () => {
    setInfo((info) => !info);
  };
  const onHelp = () => {
    setHelp((help) => !help);
  };
  const onPictureStart = () => {
    history.push('/upload');
  };
  const onManualStart = () => {
    history.push('/color/pick');
  };

  return (
    <Container>
      <InfoModal visible={info} onClose={onInfo} />
      <HelpModal visible={help} onClose={onHelp} />
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
        <Button onClick={onManualStart}>직접 색 고르기</Button>
      </ButtonWrap>
    </Container>
  );
};

export default Main;
