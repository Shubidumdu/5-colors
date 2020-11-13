import React, { useMemo, useState } from 'react';
import Header from '../components/header/Header';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Color from '../components/color/Color';
import Card from '../components/card/Card';
import Cropper from '../components/cropper/Cropper';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadImage from 'blueimp-load-image';
import { cropImage, uploadImage } from '../redux/image';
import { getCroppedImg } from '../components/cropper/util';
import { analyzeImage } from '../api/etri';
import parseDataURL from '../util/parseBase64';
import { postPicture } from '../redux/result';
import { AiOutlineWarning } from 'react-icons/ai';

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

const DescSub = styled.div`
  font-size: 0.8rem;
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
  const blob = useSelector((state) => state.image.blob);
  const [imgRef, setImgRef] = useState();
  const imageURL = useMemo(() => URL.createObjectURL(blob), [blob]);
  const onBack = () => {
    history.goBack();
  };
  const onCrop = async (crop, percentCrop) => {
    if (!imgRef) return;
    const cropped = await getCroppedImg(imgRef, crop);
    dispatch(cropImage(cropped));
  };
  const croppedImg = useSelector((state) => state.image.cropped);
  const onNext = async () => {
    if (/data:,/.test(croppedImg)) return;
    const { type, file } = parseDataURL(croppedImg);
    dispatch(postPicture(type, file));
    history.push('/result/picture');
  };

  return (
    <Container>
      <Header />
      <Card>
        <Content>
          <div className="section">
            <Cropper
              onCrop={onCrop}
              src={imageURL}
              onImageLoaded={(img) => {
                setImgRef(img);
              }}
            />
          </div>
          <Desc>
            사진을 적절히 잘라주세요.
            <DescSub>
              <AiOutlineWarning size="1rem" />
              전신이 나오도록 해주세요.
            </DescSub>
            <DescSub>
              <AiOutlineWarning size="1rem" />
              여러 인물이 겹치지 않도록 해주세요.
            </DescSub>
          </Desc>
          <ButtonWrap className="buttons">
            <Button onClick={onBack}>뒤로</Button>
            <Button
              primary
              onClick={onNext}
              disabled={/data:,/.test(croppedImg)}
            >
              다음
            </Button>
          </ButtonWrap>
        </Content>
      </Card>
    </Container>
  );
};

export default PicCrop;
