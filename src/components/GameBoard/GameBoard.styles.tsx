import styled from 'styled-components';

export const GameBoardContainer = styled.div`
  width: 85vw;
  max-width: 500px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  background-color: lightgrey;
  margin: auto;
`;

export const BoardCell = styled.div<{ selected?: boolean; myTurn: boolean }>`
  position: relative;
  padding-top: 100%;
  background-color: #2c2b2d;
  opacity: ${({ selected }) => (selected ? 0.9 : 1)};
  cursor: ${({ myTurn }) => (myTurn ? 'pointer' : 'initial')};

  &:hover {
    opacity: ${({ myTurn }) => (myTurn ? 0.9 : 1)};
  }
`;
