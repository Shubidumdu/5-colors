import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const Content = styled.div`
  background: #fff;
  width: 5rem;
  height: 5rem;
`;

const Info = ({ visible }) => {
  return (
    <div className={`modal ${visible ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <Content className="modal-content"></Content>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default Info;
