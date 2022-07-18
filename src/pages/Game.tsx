import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { Confirmation } from "../components/Confirmation";
import { IdentifyYourself } from "../components/IdentifyYourself";
import { GameWrapper, Loading } from "../styles";
import { socialize } from "../utils/ajax";
import { getPlayer } from "../utils/auth";

export const GamePage = () => {
  const { code: codeFromParams } = useParams();
  const code = useMemo(() => codeFromParams ?? '', [codeFromParams]);
  const [error, setError] = useState<boolean>(false);
  const [game, setGame] = useState<Record<string,any>>();
  const [currentPlayer, setCurrentPlayer] = useState<string>(getPlayer);

  useEffect(() => {
    let socket: Socket;

    if(!error){
      setCurrentPlayer(getPlayer());
      socket = socialize(code, (data) => {
        setGame(data);
      },
      () => setError(true));
    }

    return () => {
      socket?.disconnect();
    };
  }, [code, error])

  if(error){
    return (
      <IdentifyYourself onFinish={() => setError(false)} code={code ?? ''}/>
    )
  }

  if(!game){
    return (
      <Loading>Wiping tables... Give me a second!</Loading>
    )
  }

  if(!game.inProgress){
    return (
      <Confirmation code={code ?? ''} players={game.players} canConfirm={game.queen === currentPlayer} />
    )
  }

  return (
    <GameWrapper>
    </GameWrapper>
  )
}