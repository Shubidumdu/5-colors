import React, { useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Color from '../components/color/Color';
import Card from '../components/card/Card';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../redux/image';
import loadImage from 'blueimp-load-image';
import { FaFileUpload } from 'react-icons/fa';

const Container = styled.div``;

const Content = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;

const Picture = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const Desc = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const IconWrap = styled.div`
  margin-top: 2rem;
`;

const CheckBoxSet = styled.div``;

const CheckBoxContainer = styled.div``;

const PicUpload = () => {
  const history = useHistory();
  const image = useSelector((state) => state.image.blob);
  const dispatch = useDispatch();
  const onFileUpload = (e) => {
    const file = e.target.files[0];
    loadImage(
      file,
      (img) => {
        img.toBlob((blob) => {
          dispatch(uploadImage(blob));
        }, 'image/png');
      },
      { orientation: true, canvas: true },
    );
  };
  const onBack = () => {
    history.goBack();
  };
  const onNext = () => {
    if (!image) return;
    history.push('/crop');
  };

  return (
    <Container>
      <Header />
      <Card>
        <Content>
          <Desc className="section">
            사진을 업로드해 주세요.
            <IconWrap>
              <FaFileUpload size="5rem" />
            </IconWrap>
          </Desc>
          <ButtonWrap className="buttons">
            <label htmlFor="upload">
              <Button>업로드</Button>
            </label>
            <FileInput
              id="upload"
              type="file"
              accept="image/png, image/jpeg"
              onChange={onFileUpload}
            />
          </ButtonWrap>
          <ButtonWrap className="buttons">
            <Button onClick={onBack}>뒤로</Button>
            <Button onClick={onNext} primary={image} disabled={!image}>
              다음
            </Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default PicUpload;
