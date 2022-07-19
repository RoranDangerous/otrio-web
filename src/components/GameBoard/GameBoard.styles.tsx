import styled from "styled-components";

export const GameBoardContainer = styled.div`
  width: 100vw;
  max-width: 500px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  background-color: lightgrey;
`

export const BoardCell = styled.div<{ selected?: boolean }>`
  position: relative;
  padding-top: 100%;
  background-color: #2c2b2d;
  opacity: ${({ selected }) => selected ? 0.9 : 1};

  &:hover {
    opacity: 0.9;
  }
`