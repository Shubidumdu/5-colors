import React, { useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import ColorPicker from "../components/colorpicker/ColorPicker";
import DeleteButton from "../components/button/DeleteButton";

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

const ColorPick = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onBack = () => {};
  const onResult = () => {};
  const colors = ["#000000", "#000000"];

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Desc>포함하고자 하는 색들을 추가해주세요!</Desc>
          <ColorPicker />
          <ButtonWrap>
            <Button onClick={onBack}>뒤로</Button>
            <Button onClick={onResult}>결과 보기</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default ColorPick;
