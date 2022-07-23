import { getToken, setToken, getColor, setColor as setColorLocal } from './auth';
import socketIOClient from 'socket.io-client';
import { GameState } from '../pages/Game/GameContext';
import { getRandomColor } from './random';

const ENDPOINT = 'https://otrio-roman.herokuapp.com';

export const createGame = async (player: string) => {
  const response = await fetch(ENDPOINT + '/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: player,
      color: getColor() || getRandomColor(),
    }),
  });
  const { token, code, error } = await response.json();
  setToken(token);

  return { code, error };
};

export const joinGame = async (code: string, player: string) => {
  const response = await fetch(ENDPOINT + '/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: player,
      room: code,
      token: getToken(),
    }),
  });
  const { token, error } = await response.json();
  setToken(token);

  const color = getColor();
  if(color){
    await setColor(color);
  }

  return { token, error };
};

export const socialize = (code: string, onEvent: (data: GameState) => void, onError: () => void) => {
  const socket = socketIOClient(ENDPOINT, { query: { token: getToken(), code } });
  socket.on('update', (data) => {
    onEvent(data);
  });
  socket.on('connect_error', (err) => {
    console.error(err.message);
    onError();
  });
  return socket;
};

export const startGame = (code: string, player: string) =>
  fetch(ENDPOINT + '/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: player,
      code,
    }),
  });

export const move = (cell: number, chipSize: string) =>
  fetch(ENDPOINT + '/move', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cell,
      chipSize,
      token: getToken(),
    }),
  });

export const reset = () =>
  fetch(ENDPOINT + '/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getToken() }),
  });

export const setColor = async (color: string) => {
  const response = await fetch(ENDPOINT + '/color', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getToken(), color }),
  });

  setColorLocal(color);

  return response;
}
