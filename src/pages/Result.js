import React, { useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import deparseRGB from "../util/deparseRGB";
import { postColor } from "../redux/result";
import { useHistory } from "react-router-dom";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const onHelp = () => {};
  const onInfo = () => {};
  const colors = useSelector((state) => state.color);
  const result = useSelector((state) => state.result.color);
  const onRetry = () => {
    dispatch(postColor(colors));
  };
  const onMain = () => {
    history.push("/");
  };

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Head className="">결과</Head>
          <Desc>이런 색 조합은 어떤가요??</Desc>
          <ResultWrap className="section">
            {result.map((color) => {
              const deparsed = deparseRGB(color);
              return <Color color={deparsed} />;
            })}
          </ResultWrap>
          <Desc>
            시도할 때마다 다른 결과를 얻을 수 있습니다! 색이 마음에 들지
            않는다면 재조합을 해보세요.
          </Desc>
          <ButtonWrap className="buttons is-centered">
            <Button onClick={onRetry}>재조합</Button>
          </ButtonWrap>
          <ButtonWrap className="buttons is-centered">
            <Button onClick={onMain}>처음으로</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default Result;
