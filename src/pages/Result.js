import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import ColorSet from '../components/color/ColorSet';
import Card from '../components/card/Card';

const Container = styled.div``;

const Content = styled.div``;

const Head = styled.div`
  text-align: center;
  font-size: 1.25rem;
`;

const Desc = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const ButtonWrap = styled.div``;

const Result = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onRetry = () => {};
  const [colors, setColors] = useState([]);

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Head className="section">결과</Head>
          {colors.map((color) => (
            <ColorSet colors={colors} />
          ))}
          <Desc>테스트에요.</Desc>
          <ButtonWrap className="section buttons is-centered">
            <Button onClick={onRetry}>다시하기</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default Result;
