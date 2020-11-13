import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Color from '../components/color/Color';
import Card from '../components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import deparseRGB from '../util/deparseRGB';
import { postColor, resetResult } from '../redux/result';
import { useHistory } from 'react-router-dom';
import { resetColors } from '../redux/color';
import { resetImage } from '../redux/image';

const Container = styled.div``;

const Content = styled.div``;

const Head = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding-top: 1rem;
`;

const ResultWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Desc = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;

  @media (max-width: 280px) {
    font-size: 0.7rem;
  }
`;

const Remark = styled.div`
  font-size: 0.6rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Result = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const colors = useSelector((state) => state.color);
  const result = useSelector((state) => state.result.color);
  const onRetry = () => {
    dispatch(postColor(colors));
  };
  const onMain = () => {
    dispatch(resetColors());
    dispatch(resetImage());
    dispatch(resetResult());
    history.push('/');
  };

  return (
    <Container>
      <Header />
      <Card>
        <Content>
          <Head className="">결과</Head>
          <Desc>
            이런 색 조합은 어떤가요?? <br />
            <Remark>(색에 미묘한 변경이 있을 수 있습니다.)</Remark>
          </Desc>
          <ResultWrap className="section">
            {result.map((color) => {
              const deparsed = deparseRGB(color);
              return <Color color={deparsed} />;
            })}
          </ResultWrap>
          <Desc>재조합으로 다른 결과를 얻을 수 있습니다.</Desc>
          <ButtonWrap className="buttons section is-centered">
            <Button onClick={onMain}>처음으로</Button>
            <Button primary onClick={onRetry}>
              재조합
            </Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default Result;
