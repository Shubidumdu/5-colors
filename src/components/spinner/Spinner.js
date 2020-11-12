import React from "react";
import { css } from "@emotion/core";
import RiseLoader from "react-spinners/RiseLoader";
import styled from "styled-components";

const Container = styled.div``;

const Spinner = ({ visible }) => {
  return (
    <div className={`modal ${visible ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <RiseLoader color="#fff" />
    </div>
  );
};

export default Spinner;
