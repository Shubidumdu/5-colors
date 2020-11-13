import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Color from '../components/color/Color';
import Card from '../components/card/Card';
import DeleteButton from '../components/button/DeleteButton';
import ColorPicker from '../components/colorpicker/ColorPicker';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postColor } from '../redux/result';
import { addColor, removeColor } from '../redux/color';
import rgbToArr from '../util/rgbToArr';
import deparseRGB from '../util/deparseRGB';

const Container = styled.div``;

const Content = styled.div``;

const Desc = styled.div`
  text-align: center;
  font-size: 0.7rem;
  padding: 2rem;
`;

const ColorWrap = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  transition: 0.3s;
`;

const ColorContainer = styled.div`
  position: relative;

  .delete {
    position: absolute;
    right: -4px;
    top: -4px;
  }
`;

const ButtonWrap = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
`;

const ColorPick = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color);
  const [color, setColor] = useState({
    hex: '#000000',
  });
  const onBack = () => {
    history.goBack();
  };
  const onChange = (color, e) => {
    const { rgb, hex } = color;
    setColor({ rgb, hex });
  };

  const onResult = async () => {
    dispatch(postColor(colors));
    history.push('/result');
  };
  const onAdd = () => {
    if (colors.length > 3) return;
    const rgb = color.rgb;
    dispatch(addColor(rgbToArr(rgb)));
  };

  return (
    <Container>
      <Header />
      <Card>
        <Content>
          <Desc>
            입고자 하는 색들을 추가해주세요! <br /> (최대 4개)
          </Desc>
          <section>
            <ColorPicker onChange={onChange} color={color.hex} />
          </section>
          <ButtonWrap className="buttons is-centered">
            <Button
              primary={colors.length < 4}
              onClick={onAdd}
              disabled={colors.length > 3}
            >
              추가
            </Button>
          </ButtonWrap>
          <Desc>
            {colors.length > 0 && '아래의 색들로 옷 조합을 구성합니다.'}
          </Desc>
          <ColorWrap>
            {colors.map((color, idx) => {
              const onDelete = () => {
                dispatch(removeColor(idx));
              };
              const deparsed = deparseRGB(color);
              return (
                <ColorContainer>
                  <DeleteButton size="small" onClick={onDelete} />
                  <Color color={deparsed} />
                </ColorContainer>
              );
            })}
          </ColorWrap>
          <ButtonWrap className="buttons is-centered">
            <Button onClick={onBack}>뒤로</Button>
            <Button
              primary={colors.length > 0}
              onClick={onResult}
              disabled={colors.length < 1}
            >
              결과 보기
            </Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default ColorPick;
