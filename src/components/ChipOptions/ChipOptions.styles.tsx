import styled from "styled-components";

export const OptionsContainer = styled.div<{ visible: boolean }>`
  width: 100vw;
  max-width: 500px;
  display: grid;
  padding: 1px;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  background-color: lightgrey;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;

export const OptionCell = styled.div`
  position: relative;
  padding-top: 100%;
  background-color: #2c2b2d;

  &:hover {
    opacity: 0.9;
  }
`;