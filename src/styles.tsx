import * as color from './constants/colors';
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background-color: ${color.mint};
  color: white;
  padding: 1.2em;
  width: 20rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  font-size: 1rem;
  max-width: 90vw;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    color: white;
  }
`;

export const ButtonSecondary = styled.button`
  background-color: white;
  color: ${color.black};
  padding: 1.2em;
  width: 20rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  font-size: 1rem;
  max-width: 90vw;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    color: white;
  }
`;

export const Label = styled.label`
  width: 25rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 1rem;
  max-width: 90vw;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 25rem;
  height: 3rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 1.7rem;
  color: ${color.black};
  margin-top: 0.5rem;
  text-transform: uppercase;
  max-width: 90vw;
`;

export const ErrorMessage = styled.p`
  color: ${color.red};
  max-width: 90vw;
  margin: 1rem 0 0 0;
`;
