import styled from 'styled-components';
import { AiOutlineReload } from 'react-icons/ai';

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex:
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 2px 10px #000;
`;

export const HeaderText = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 0.5rem 0;
`;

export const ReloadIcon = styled(AiOutlineReload)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  padding: 0.2rem;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
