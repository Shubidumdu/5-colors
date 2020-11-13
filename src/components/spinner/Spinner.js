import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const Spinner = ({ visible }) => {
  return (
    <div
      className={`modal ${visible ? "is-active" : ""}`}
      style={{ background: "#000" }}
    >
      <div className="modal-background"></div>
      <BarLoader color="#fff" />
    </div>
  );
};

export default Spinner;
