import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Logo from '../image/Logo';

const MainContainer = styled.div``;

const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <div class="hero is-white is-fullheight">
      <div class="container level">
        <MainContainer className="box">
          <IconContainer className="level">
            <Logo />
          </IconContainer>
          <h1 class="title">오깔라</h1>
          <ButtonContainer>
            <Button>사진으로 이용하기</Button>
            <Button>직접 고르기</Button>
          </ButtonContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Main;
