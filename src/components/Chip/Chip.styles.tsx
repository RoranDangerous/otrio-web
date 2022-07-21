import styled from 'styled-components';

export enum CircleSize {
  LARGE = 90,
  MEDIUM = 52,
  SMALL = 20,
}

const getInnerCircleSize = (size: CircleSize) => (size === CircleSize.LARGE ? 70 : 60);

export const OuterCircle = styled.div<{ color: string; size: CircleSize }>`
  position: absolute;
  top: ${({ size }) => (100 - size) / 2}%;
  right: ${({ size }) => (100 - size) / 2}%;
  width: ${({ size }) => size}%;
  height: ${({ size }) => size}%;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const InnerCircle = styled.div<{ size: CircleSize }>`
  position: absolute;
  top: ${({ size }) => (100 - getInnerCircleSize(size)) / 2}%;
  right: ${({ size }) => (100 - getInnerCircleSize(size)) / 2}%;
  width: ${({ size }) => getInnerCircleSize(size)}%;
  height: ${({ size }) => getInnerCircleSize(size)}%;
  background-color: #2c2b2d;
  border-radius: 50%;
`;
