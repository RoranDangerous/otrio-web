import React, { useContext, useMemo } from "react"
import { GameContext } from "../../pages/Game/GameContext"
import { move } from "../../utils/ajax";
import { getPlayer } from "../../utils/auth";
import { Chip } from "../Chip";
import { CircleSize } from "../Chip/Chip.styles";
import { OptionCell, OptionsContainer } from "./ChipOptions.styles";

export const ChipOptions = () => {
  const { game, cellSelected, setCellSelected } = useContext(GameContext);
  const playerColor = useMemo(() => game.players[getPlayer()].color, [game]);

  const handleOptionClick = async (size: string) => {
    if(!cellSelected){
      return;
    }

    await move(cellSelected, size);
    setCellSelected(null);
  }

  return (
    <OptionsContainer visible={cellSelected !== null}>
      <OptionCell onClick={() => handleOptionClick('small')}>
        <Chip size={CircleSize.SMALL} color={playerColor}/>
      </OptionCell>
      <OptionCell onClick={() => handleOptionClick('medium')}>
        <Chip size={CircleSize.MEDIUM} color={playerColor}/>
      </OptionCell>
      <OptionCell onClick={() => handleOptionClick('large')}>
        <Chip size={CircleSize.LARGE} color={playerColor}/>
      </OptionCell>
    </OptionsContainer>
  )
}