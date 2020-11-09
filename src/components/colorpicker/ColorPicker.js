import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SliderPicker } from "react-color";
import { usePopper } from "react-popper";

const ColorPicker = ({ onClick }) => {
  const [color, setColor] = useState("#fff");
  const onChange = (color, e) => {
    setColor(color);
  };

  const targetRef = useRef();
  const popperRef = useRef();
  const arrowRef = useRef();

  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: { element: arrowRef },
        },
      ],
    }
  );

  return (
    <div>
      <button type="button" ref={targetRef}>
        테스트
      </button>
      <div ref={popperRef} style={styles.popper} {...attributes.popper}>
        {/* <SliderPicker color={color} onChange={onChange} /> */}
        테스트
        <div ref={arrowRef} style={styles.arrow} />
      </div>
    </div>
  );
};

export default ColorPicker;
