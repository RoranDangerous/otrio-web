import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { Confirmation } from "../../components/Confirmation";
import { IdentifyYourself } from "../../components/IdentifyYourself";
import { GameWrapper, Loading } from "./Game.styles";
import { socialize } from "../../utils/ajax";
import { getPlayer } from "../../utils/auth";
import { GameBoard } from "../../components/GameBoard";
import { GameContext, GameState } from "./GameContext";
import { ChipOptions } from "../../components/ChipOptions";
import { Header } from "../../components/Header";
import { PlayersInfo } from "../../components/PlayersInfo";

export const GamePage = () => {
  const { code: codeFromParams } = useParams();
  const code = useMemo(() => codeFromParams ?? '', [codeFromParams]);
  const [error, setError] = useState<boolean>(false);
  const [game, setGame] = useState<GameState>();
  const [iPlayer, setIPlayer] = useState<string>(getPlayer);
  const [cellSelected, setCellSelected] = useState<number | null>(null);

  useEffect(() => {
    let socket: Socket;

    if(!error){
      setIPlayer(getPlayer());
      socket = socialize(code, (data) => {
        console.log(data)
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
      <Confirmation code={code ?? ''} players={game.players} canConfirm={game.queen === iPlayer} />
    )
  }

  return (
    <GameContext.Provider value={{ game, cellSelected, setCellSelected}}>
      <GameWrapper>
        <Header />
        <PlayersInfo />
        <GameBoard/>
        <ChipOptions />
      </GameWrapper>
    </GameContext.Provider>
  )
}