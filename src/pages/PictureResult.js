import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Button from "../components/button/Button";
import Color from "../components/color/Color";
import Card from "../components/card/Card";
import DeleteButton from "../components/button/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import parseDataURL from "../util/parseBase64";
import { analyzeImage } from "../api/etri";
import CheckBox from "../components/checkbox/Checkbox";
import { useHistory } from "react-router-dom";
import { postColor } from "../redux/result";
import parseRGB from "../util/parseRGB";

const Container = styled.div``;

const Content = styled.div``;

const Desc = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const ClothType = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ColorItem = styled.div``;

const ColorWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
  margin: 0 auto;
`;

const ColorCode = styled.span``;

const ButtonWrap = styled.div``;

const ResultWrap = styled.div``;

const ColorContainer = ({ color }) => {
  return (
    <ColorWrap>
      <Color color={color} />
      <ColorCode>{color}</ColorCode>
    </ColorWrap>
  );
};

const LABELS = {
  coat: "외투",
  dress: "드레스",
  hat: "모자",
  pants: "바지",
  skirt: "스커트",
  upcloth: "상의",
};

const ColorEdit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onHelp = () => {};
  const onInfo = () => {};
  const onBack = () => {
    history.goBack();
  };
  const result = useSelector((state) => state.result.picture);
  const [checkboxes, setCheckboxes] = useState({});
  const onResult = async () => {
    const colors = result.reduce((prev, { type, color }, idx) => {
      const parsedColor = parseRGB(color);
      if (checkboxes[type] === true) return [...prev, parsedColor];
      return [...prev];
    }, []);
    dispatch(postColor(colors));
    history.push("/result");
  };

  return (
    <Container>
      <Header onHelp={onHelp} onInfo={onInfo} />
      <Card>
        <Content>
          <Desc>포함하고자 하는 색들을 골라주세요!</Desc>
          <ResultWrap className="section">
            {result.map(({ type, color }, idx) => {
              const label = LABELS[type];
              const onChange = (e) => {
                const checked = e.target.checked;
                setCheckboxes((origin) => ({ ...origin, [type]: checked }));
              };
              return (
                <ColorWrap key={type}>
                  <CheckBox onChange={onChange} />
                  <ClothType>{label}</ClothType>
                  <Color color={color} />
                </ColorWrap>
              );
            })}
          </ResultWrap>
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
