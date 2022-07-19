import styled from "styled-components";
import * as color from '../../constants/colors';

export const RoomCode = styled.p`
  font-size: 3rem;
  border-bottom: 1px solid rgba(255,255,255,.3);
  width: 25rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  max-width: 90vw;
  cursor: pointer;
`

export const PlayersList = styled.div`
width: 25rem;
max-width: 90vw;
padding: 1rem;
display: flex;
flex-direction: column;
`

export const PlayerItem = styled.div<{ isCurrent: boolean }>`
display: flex;
flex-direction: row;
justify-content: space-between;

& > p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: ${({ isCurrent }) => isCurrent ? color.blue : 'unset'};
}
`;