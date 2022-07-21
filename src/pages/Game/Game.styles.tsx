import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  padding-top: 100%;
  background-color: white;
`;

export const Loading = styled.p`
  font-size: 1.2rem;
  width: 25rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  max-width: 90vw;
`;
