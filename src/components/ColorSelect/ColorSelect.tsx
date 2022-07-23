import React, { useContext, useMemo, useState } from "react";
import { ChipColor } from "../../constants/colors";
import { GameContext } from "../../pages/Game/GameContext";
import { setColor } from "../../utils/ajax";
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, ListItem } from "./ColorSelect.styles";

type ColorSelectProps = {
  color: string;
}

export const ColorSelect: React.FC<ColorSelectProps> = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { game } = useContext(GameContext);

  const options = useMemo(() => {
    const existingColors = Object.values(game.players).map((player) => player.color);
    return Object.values(ChipColor).filter((color) => !existingColors.includes(color))
  }, [game]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (color: string) => async () => {
    setIsOpen(false);

    await setColor(color);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling} color={color}/>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()} color={option}/>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};