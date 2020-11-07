import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import CheckBox from '../components/checkbox/CheckBox';
import Color from '../components/color/Color';
import Card from '../components/card/Card';

const Container = styled.div``;

const Content = styled.div``;

const Picture = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const Desc = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1rem;
`;

const ButtonWrap = styled.div`
  justify-content: space-around;

  &:last-child {
    padding-bottom: 1rem;
  }
`;

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
  const [filtering, setFiltering] = useState(true);
  const [colors, setColors] = useState([]);

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <div className="section">
            <Picture
              alt="fashion"
              src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/25/98015677.7.jpg"
            />
          </div>
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
              <ButtonWrap className="buttons">
                <Button onClick={onBefore}>뒤로</Button>
                <Button onClick={onResult}>완료</Button>
              </ButtonWrap>
            </>
          ) : (
            <>
              <Desc>사진을 업로드해 주세요.</Desc>
              <ButtonWrap className="buttons">
                <Button onClick={onUpload}>업로드</Button>
              </ButtonWrap>
              <ButtonWrap className="buttons">
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
