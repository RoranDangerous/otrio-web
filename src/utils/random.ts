import { ChipColor } from "../constants/colors";

export const getRandomColor = (existingColors: ChipColor[] = []) => {
  const colors = Object.values(ChipColor);

  let color = null;
  while(!color || existingColors.includes(color)){
    color = colors[Math.floor(Math.random()*colors.length)];
  }

  return color
}