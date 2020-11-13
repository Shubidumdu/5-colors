import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MdError } from 'react-icons/md';
import Button from '../button/Button';
import { useHistory } from 'react-router-dom';
import { resetResult } from '../../redux/result';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

const Desc = styled.div`
  padding: 1rem;
`;

const ErrorModal = ({ visible, children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onMain = () => {
    dispatch(resetResult());
    history.replace('/');
  };

  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <Content className="modal-content">
        <MdError color="#fff" size="4rem" />
        <Desc>{children}</Desc>
        <div className="buttons">
          <Button size="small" onClick={onMain}>
            메인으로
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default ErrorModal;
