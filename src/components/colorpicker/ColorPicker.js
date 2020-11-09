import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { usePopper } from 'react-popper';

const Pop = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 12rem;
  flex-direction: column;
  border-radius: 4px;
  padding: 5px;
`;

const PopContainer = styled.div`
  width: 12rem;
  background: #fff;
  box-shadow: 0px 1px 6px lightgrey;
`;

const Color = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background: ${(props) => props.color};
`;

const ColorPicker = ({}) => {
  const [color, setColor] = useState('#000');
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

  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current,
    {
      placement: 'right',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {},
        },
      ],
    },
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
        </Pop>
      </PopContainer>
    </div>
  );
};

export default ColorPicker;
