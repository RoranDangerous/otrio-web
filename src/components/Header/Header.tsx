import React, { useContext } from "react"
import { GameContext } from "../../pages/Game/GameContext";
import { reset } from "../../utils/ajax";
import { getPlayer } from "../../utils/auth";
import { HeaderContainer, HeaderText, ReloadIcon } from "./Header.styles";


export const Header = () => {
  const { game } = useContext(GameContext);

  return (
    <HeaderContainer>
      <HeaderText>Otrio</HeaderText>
      {getPlayer() === game.queen && <ReloadIcon onClick={reset}/>}
    </HeaderContainer>
  )
}