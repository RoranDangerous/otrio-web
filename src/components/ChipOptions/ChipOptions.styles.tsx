import styled from 'styled-components';

export const OptionsContainer = styled.div<{ visible: boolean }>`
  width: 100vw;
  max-width: 500px;
  display: grid;
  padding: 1px;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  margin: auto;
`;

export const OptionCell = styled.div<{ disabled: boolean }>`
  position: relative;
  padding-top: 100%;
  background-color: #2c2b2d;
  cursor: pointer;
  box-shadow: 0px 2px 10px #000;
  border-radius: 25px;

  ${({ disabled }) =>
    disabled &&
    `
  opacity: 0.3;
  cursor: not-allowed;
  `};

  ${({ disabled }) =>
    !disabled &&
    `
  &:hover {
    opacity: 0.5;
  }`}
`;
