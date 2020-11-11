import React, { useMemo, useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import Cropper from "../components/cropper/Cropper";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loadImage from "blueimp-load-image";
import { cropImage, uploadImage } from "../redux/image";
import { getCroppedImg } from "../components/cropper/util";
import { analyzeImage } from "../api/etri";
import parseDataURL from "../util/parseBase64";

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
  const blob = useSelector((state) => state.image.blob);
  const [imgRef, setImgRef] = useState();
  const imageURL = useMemo(() => URL.createObjectURL(blob), [blob]);
  const onHelp = () => {};
  const onInfo = () => {};
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
    const parsed = parseDataURL(croppedImg);
    const result = await analyzeImage(parsed);
    history.push("/color/edit");
  };

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
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
          <img src={croppedImg} />
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
