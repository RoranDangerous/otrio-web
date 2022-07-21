import { getToken, setToken } from "./auth";
import socketIOClient from "socket.io-client";
import { GameState } from "../pages/Game/GameContext";

const ENDPOINT = "http://127.0.0.1:4001";

export const createGame = async (player: string) => {
  const response = await fetch(ENDPOINT+'/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: player
    })
  })
  const { token, code } = await response.json();
  setToken(token);

  return code;
}

export const joinGame = async (code: string, player: string) => {
  const response = await fetch(ENDPOINT+'/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: player,
      room: code,
      token: getToken()
    })
  })
  const { token, error } = await response.json();
  setToken(token);

  return { token, error};
}

export const socialize = (code: string, onEvent: (data: GameState) => void, onError: () => void) => {
  const socket = socketIOClient(ENDPOINT, { query: { token: getToken(), code }});
  socket.on('update', data => {
    onEvent(data)
  });
  socket.on('connect_error', (err) => {
    console.error(err.message);
    onError();
  })
  return socket;
}

export const startGame = (code: string, player: string) => fetch(ENDPOINT+'/start', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: player,
    code
  })
});

export const move = (cell: number, chipSize: string) => fetch(ENDPOINT+'/move', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    cell,
    chipSize,
    token: getToken()
  })
});

export const reset = () => fetch(ENDPOINT+'/reset', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ token: getToken() })
});