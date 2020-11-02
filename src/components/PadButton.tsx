import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';

type StyledProps = {
    color: string,
    theme: Theme
};

type Props = {
  color: string,
  buttonNumber: number,
  keyCode: string
};

const StyledButton = styled.div<StyledProps>`
  width: 84px;
  height: 100%;
  background: ${(props) => props.theme.gradient[props.color]};
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`;

const StyledKey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  color: #7f8c8d;
`;

const PadButton = function({ color, buttonNumber, keyCode }: Props){
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentColor, setCurrentColor] = useState("gray");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const audio = audioRef.current;

    if(audio){
      if(event.shiftKey && !audio.loop){
        audio.play();
      } else if(!audio.loop){
       audio.play();
      }

      audio.loop = event.shiftKey;
    }
  };
  
  const handlePlay = () => {
    setCurrentColor(color);
  };

  const handleEnd = () => {
    setCurrentColor("gray");
  };

  return (
    <>
      <StyledButton 
        color={currentColor}
        onClick={handleClick} 
      >
        <StyledKey>{keyCode.toUpperCase()}</StyledKey>
      </StyledButton>
      <audio 
        ref={audioRef}
        src={`sounds/${color}${buttonNumber}.wav`}
        onPlay={handlePlay}
        onEnded={handleEnd} 
        data-key={keyCode}
      />
    </>
  );
}

export default PadButton;