import styled from "styled-components";
import * as color from '../../constants/colors';

export const PlayersContainer = styled.div`
  width: 100vw;
  max-width: 500px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem auto auto auto;
`

export const PlayerCell = styled.div<{ isTurn: boolean; isWinner: boolean, isLoser: boolean }>`
  text-align: center;

  & > p {
    margin-top: 0;
    margin-bottom: 5px;
    ${({ isTurn }) => isTurn ? `color: ${color.blue}` : null};
    ${({ isLoser }) => isLoser ? `color: ${color.redBright}` : null};
    ${({ isWinner }) => isWinner && `
    color: lime;
    font-size: 1.5rem;
    font-weight: 900;
    `}
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  display: grid;
  padding: 1px;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
`;

export const ChipContainer = styled.div`
  position: relative;
  padding-top: 100%;
  background-color: #2c2b2d;
`;

export const ChipQTY = styled.p`
  margin: 0;
`