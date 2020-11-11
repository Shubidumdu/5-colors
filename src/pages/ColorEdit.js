import React, { useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import DeleteButton from "../components/button/DeleteButton";
import { useSelector } from "react-redux";
import parseDataURL from "../util/parseBase64";
import { analyzeImage } from "../api/etri";

const Container = styled.div``;

const Content = styled.div``;

const Desc = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const ColorItem = styled.div``;

const ColorWrap = styled.span``;

const ColorCode = styled.span``;

const ButtonWrap = styled.div``;

const ColorContainer = ({ color }) => {
  return (
    <ColorWrap>
      <Color color={color} />
      <ColorCode>{color}</ColorCode>
    </ColorWrap>
  );
};

const picResult = [
  {
    type: "upcloth",
    color: "(0, 0, 0)",
  },
];

const ColorEdit = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onBack = () => {};
  const onResult = async () => {};
  const cropped = useSelector((state) => state.image.cropped);

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <section className="section">
            <img src={cropped} />
          </section>
          <Desc>추가하고자 하는 색들을 골라주세요!</Desc>
          <ButtonWrap>
            <Button onClick={onBack}>뒤로</Button>
            <Button onClick={onResult}>결과 보기</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default ColorEdit;
