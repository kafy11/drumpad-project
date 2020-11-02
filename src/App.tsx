import React from 'react';
import styled from 'styled-components';
import PadRow from './components/PadRow';
import useKeyDownTrigger from './hooks/useKeyDownTrigger';

const PageBG = styled.div`
  background-color: ${({ theme }) => theme.pageBackground};
  height: 100vh;
  width: 100vw;
`;

const CenteredContainer = styled.div`
  position: absolute;
  margin: 32px auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const PadContainer = styled.div `
  width: 100%;
  height: 400px;
  padding: 16px;
  background-color: ${({ theme }) => theme.padBackground};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 8px;
`;

function App() {
  useKeyDownTrigger();

  return (
    <PageBG>
      <CenteredContainer>
        <PadContainer>
          <PadRow color="blue" keyCodes={['1','2','3','4']} />
          <PadRow color="green"  keyCodes={['q','w','e','r']} />
          <PadRow color="red" keyCodes={['a','s','d','f']} />
          <PadRow color="yellow" keyCodes={['z','x','c','v']} />
        </PadContainer>
        Click: play the sound
        <br/>
        Shift + Click: loop the sound
      </CenteredContainer>
    </PageBG>
  );
}

export default App;
