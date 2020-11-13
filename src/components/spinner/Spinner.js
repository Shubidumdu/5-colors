import React from 'react';
import { css } from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Spinner = ({ visible }) => {
  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
      <div className="modal-background" style={{ background: '#fff' }}></div>
      <Content className="modal-content">
        <Desc>
          진행 중입니다. <br /> 잠시만 기다려주세요.
        </Desc>
        <BarLoader color="hsl(171, 100%, 41%)" />
      </Content>
    </div>
  );
};

export default Spinner;
