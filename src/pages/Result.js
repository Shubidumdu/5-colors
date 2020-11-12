import React, { useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";
import deparseRGB from "../util/deparseRGB";

const Container = styled.div``;

const Content = styled.div``;

const Head = styled.div`
  text-align: center;
  font-size: 1.25rem;
`;

const ResultWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  const colors = useSelector((state) => state.result.color);

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Head className="">결과</Head>
          <ResultWrap className="section">
            {colors.map((color) => {
              const deparsed = deparseRGB(color);
              return <Color color={deparsed} />;
            })}
          </ResultWrap>
          <Desc>
            시도할 때마다 다른 결과를 얻을 수 있습니다! 색이 마음에 들지
            않는다면 다시 시도해보세요.
          </Desc>
          <ButtonWrap className="section buttons is-centered">
            <Button onClick={onRetry}>다시하기</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default Result;
