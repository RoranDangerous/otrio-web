const tokenKey = 'otrio-token';
const playerKey = 'otrio-player';
const playerColor = 'otrio-color';

export const getToken = () => localStorage.getItem(tokenKey) ?? '';
export const setToken = (token: string) => localStorage.setItem(tokenKey, token);
export const getPlayer = () => localStorage.getItem(playerKey) ?? '';
export const setPlayer = (name: string) => localStorage.setItem(playerKey, name);
export const getColor = () => localStorage.getItem(playerColor+`-${getPlayer()}`) ?? '';
export const setColor = (color: string) => localStorage.setItem(playerColor+`-${getPlayer()}`, color);
