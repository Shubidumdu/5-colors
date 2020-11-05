import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../button/Button';
import Color from '../components/color/Color';
import ColorPicker from '../components/colorpicker';
import DeleteButton from '../components/button/DeleteButton';

const Container = styled.div``;

const Content = styled.div``;

const Desc = styled.div``;

const ColorItem = styled.div``;

const ColorWrap = styled.span``;

const ColorCode = styled.span``;

const ButtonWrap = styled.div``;

const ColorContainer = (color) => {
  return (
    <ColorWrap>
      <Color color={color} />
      <ColorCode>{color}</ColorCode>
    </ColorWrap>
  );
};

const Main = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onBack = () => {};
  const onResult = () => {};
  const [color, setColor] = useState();
  const [colors, setColors] = useState();

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Desc>포함하고자 하는 색들을 골라주세요!</Desc>
          <ColorPicker />
          <ColorItem>
            <ColorContainer />
          </ColorItem>
          {colors.map((color) => (
            <ColorContainer color={color} />
          ))}
          <ButtonWrap>
            <Button onClick={onBack}>뒤로</Button>
            <Button onClick={onResult}>결과 보기</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default Main;
