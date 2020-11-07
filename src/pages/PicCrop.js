import React, { useMemo, useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import CheckBox from '../components/checkbox/CheckBox';
import Color from '../components/color/Color';
import Card from '../components/card/Card';
import Cropper from '../components/cropper/Cropper';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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

const FileInput = styled.input`
  display: none;
`;

const CheckBoxSet = styled.div``;

const CheckBoxContainer = styled.div``;

const PicCrop = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const image = useSelector((state) => state.image);
  const imageBlob = useMemo(() => URL.createObjectURL(image), [image]);
  const onHelp = () => {};
  const onInfo = () => {};
  const onFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const onUpload = () => {};
  const onBack = () => {
    history.goBack();
  };

  const onCrop = (crop, percentCrop) => {};
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
          <div className="section">
            <Cropper src={imageBlob} />
          </div>
          <Desc>사진을 적절히 잘라주세요.</Desc>
          <ButtonWrap className="buttons">
            <Button onClick={onBack}>뒤로</Button>
            <Button onClick={onNext}>다음</Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default PicCrop;
