import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import { usePopper } from "react-popper";

const Pop = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const PopContainer = styled.div`
  /* width: 12rem; */
  /* background: #fff;
  box-shadow: 0px 1px 6px lightgrey; */
  z-index: 2;
`;

const Color = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background: ${(props) => props.color};
`;

const Arrow = styled.div`
  width: 1rem;
  height: 1rem;
  background: #fff;
  border: 1px solid black;
`;

const ColorPicker = ({}) => {
  const [color, setColor] = useState("#000");
  const onChange = (color, e) => {
    const hex = color.hex;
    setColor(hex);
  };

  const [visible, setVisibility] = useState(false);
  const onClick = (e) => {
    setVisibility((visible) => !visible);
  };
  const targetRef = useRef(null);
  const popperRef = useRef(null);
  const arrowRef = useRef(null);

  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      modifiers: [{ name: "arrow", options: { element: arrowRef.current } }],
    }
  );

  return (
    <div>
      <Color ref={targetRef} onClick={onClick} color={color} />
      <PopContainer
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
      >
        <Pop style={styles.offset} visible={visible}>
          <ChromePicker color={color} onChange={onChange} />
          <Arrow ref={arrowRef} />
        </Pop>
      </PopContainer>
    </div>
  );
};

export default ColorPicker;
