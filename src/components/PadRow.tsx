import React from 'react';
import styled from 'styled-components';
import PadButton from './PadButton';

type Props = {
    color: string,
    keyCodes: Array<string>
}

const PadRowContainer = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function PadRow({ color, keyCodes }: Props) {
  return (
    <PadRowContainer>
      {keyCodes.map((keyCode, i) => (
        <PadButton 
          color={color}
          buttonNumber={i + 1}
          keyCode={keyCode}
          key={i}
        />
      ))}
    </PadRowContainer>
  );
}

export default PadRow;
