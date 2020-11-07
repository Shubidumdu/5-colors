import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import CheckBox from '../components/checkbox/CheckBox';
import Color from '../components/color/Color';
import Card from '../components/card/Card';

const Container = styled.div``;

const Content = styled.div``;

const Picture = styled.img``;

const Desc = styled.div``;

const ButtonWrap = styled.div``;

const CheckBoxSet = styled.div``;

const CheckBoxContainer = styled.div``;

const PicUpload = () => {
  const onHelp = () => {};
  const onInfo = () => {};
  const onUpload = () => {};
  const onBack = () => {};
  const onBefore = () => {};
  const onNext = () => {};
  const onResult = () => {};
  const [imgSrc, setImg] = useState('');
  const [filtering, setFiltering] = useState(false);
  const [colors, setColors] = useState([]);

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Picture alt="" src="" />
          {filtering ? (
            <>
              <Desc>포함하고자 하는 색상을 골라주세요.</Desc>
              <CheckBoxSet>
                {colors.map(() => (
                  <CheckBoxContainer>
                    <CheckBox />
                    상의
                    <Color color="#fff" />
                  </CheckBoxContainer>
                ))}
              </CheckBoxSet>
              <ButtonWrap>
                <Button onClick={onBefore}>뒤로</Button>
                <Button onClick={onResult}>결과 보기</Button>
              </ButtonWrap>
            </>
          ) : (
            <>
              <Desc>사진을 촬영해주세요.</Desc>
              <ButtonWrap>
                <Button onClick={onUpload}>업로드</Button>
              </ButtonWrap>
              <ButtonWrap>
                <Button onClick={onBack}>뒤로</Button>
                <Button onClick={onNext}>다음</Button>
              </ButtonWrap>
            </>
          )}
        </Content>
      </Card>
    </Container>
  );
};

export default PicUpload;
