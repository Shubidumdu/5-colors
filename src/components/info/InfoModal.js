import React from 'react';
import styled from 'styled-components';
import Logo from '../image/Logo';

const Content = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 420px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: BMJUA;
`;

const Desc = styled.div`
  text-align: center;
  font-size: 1rem;
  word-break: keep-all;
`;

const DescContent = styled.div`
  font-size: 0.7rem;
  text-align: left;
  padding: 0 2rem;
`;

const Developer = styled.div`
  text-align: center;
  font-size: 0.8rem;
  padding: 1rem;

  & > span {
    font-weight: bold;
  }
`;

const SubHeader = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding-bottom: 0.2rem;
  padding: 1rem;
`;

const Container = styled.div`
  padding: 1rem;
`;

const LogoContainer = styled.div`
  padding: 1rem;
  width: 15rem;
  margin: 0 auto;
`;

const InfoModal = ({ visible, onClose }) => {
  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <Content className="modal-content">
        <Container className="section">
          <Title>오깔라</Title>
        </Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Container>
          <Desc>옷 색깔 조합 추천 웹 앱</Desc>
          <Developer>
            제작 <span>서원교 (Shubidumdu)</span>
          </Developer>
        </Container>
        <Container>
          <SubHeader>참고 사항</SubHeader>
          <Desc>
            <DescContent>
              1. 현재 ETRI에서 제공하는 시각지능 API의 일일 허용량은 250건이며,
              이를 초과하는 경우 웹의 정상적인 동작이 어려울 수 있습니다.
            </DescContent>
            <DescContent>
              2. 오깔라에서는 해당 웹 애플리케이션을 이용하는 데 쓰이는 이미지
              파일을 별도로 저장 및 활용하지 않습니다.
            </DescContent>
          </Desc>
        </Container>
        <Container>
          <Developer>
            Copyrightⓒ2020. Won Gyo Seo. <br />
            All rights reserved.
          </Developer>
        </Container>
      </Content>
      <button
        onClick={onClose}
        class="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
};

export default InfoModal;
