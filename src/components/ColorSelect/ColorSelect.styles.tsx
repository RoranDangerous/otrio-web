
import styled from "styled-components";

export const DropDownContainer = styled.div`
  float: left;
  margin-right: 0.8em;
`;

export const DropDownHeader = styled.div<{ color: string }>`
  width: 1.5em;
  height: 1.5em;
  border-radius: 25%;
  margin-top: -0.2em;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  position: absolute;
  padding: 0.8em;
  margin: 0.8em 0 0 -0.8em;
  box-shadow: 0px 2px 10px #000;
  background-color: #2c2b2d;
  border-radius: 10%;

  & > li:not(:last-child) {
    margin-bottom: 0.8em;
  }
`;

export const ListItem = styled.li<{ color: string }>`
  list-style: none;
  background-color: ${({ color }) => color};
  width: 1.5em;
  height: 1.5em;
  border-radius: 25%;
  cursor: pointer;
`;