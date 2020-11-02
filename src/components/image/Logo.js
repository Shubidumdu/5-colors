import React from 'react';
import styled from 'styled-components';
import img from '../../resources/logo.png';

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return <Img alt="logo" src={img}></Img>;
};

export default Logo;
