import React from 'react';
import styled from 'styled-components';

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
  padding: 2rem 0;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
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
  padding: 0 2rem;
  font-size: 0.8rem;
  text-align: center;

  & > ol > li {
    text-align: initial;
  }
`;

const LogoContainer = styled.div`
  padding: 1rem;
  width: 15rem;
  margin: 0 auto;
`;

const HelpModal = ({ visible, onClose }) => {
  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <Content className="modal-content">
        <Container className="section">
          <Title>도움말</Title>
        </Container>
        <Container>오깔라는 두 가지 방법으로 이용할 수 있습니다.</Container>
        <SubHeader>1) 사진을 이용한 분석을 통한 방식</SubHeader>
        <Container>
          <ol>
            <li>옷을 입은 인물 사진을 촬영해 업로드합니다.</li>
            <li>인물의 전신이 나오도록 이미지를 적절하게 자릅니다.</li>
            <li>
              시각 분석이 끝난 후, 입은 옷 중 어떤 색의 옷들을 입고자 하는지
              선택합니다.
            </li>
            <li>
              오깔라가 앞서 선택한 내용을 바탕으로 적절한 옷 색깔의 조합을
              추천해줍니다.
            </li>
            <li>
              색이 마음에 들지 않는다면, 재조합을 통해 새로운 결과를 가져올 수
              있습니다.
            </li>
          </ol>
        </Container>
        <SubHeader>2) 직접 조합에 쓰일 색을 고르는 방식</SubHeader>
        <Container>
          <ol>
            <li>컬러피커를 통해 직접 입고자 하는 옷의 색상을 고릅니다.</li>
            <li>
              최대 4개까지 지정할 수 있으며, 이를 통해 바로 추천 조합을 볼 수
              있습니다.
            </li>
            <li>
              오깔라가 앞서 선택한 내용을 바탕으로 적절한 옷 색깔의 조합을
              추천해줍니다.
            </li>
            <li>
              색이 마음에 들지 않는다면, 재조합을 통해 새로운 결과를 가져올 수
              있습니다.
            </li>
          </ol>
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

export default HelpModal;
