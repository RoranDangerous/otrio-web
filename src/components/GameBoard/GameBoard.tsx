import React, { useContext, useMemo, useState } from 'react';
import { GameContext } from '../../pages/Game/GameContext';
import { getPlayer } from '../../utils/auth';
import { Chip } from '../Chip';
import { CircleSize } from '../Chip/Chip.styles';
import { BoardCell, GameBoardContainer } from './GameBoard.styles';

export const GameBoard = () => {
  const { game, cellSelected, setCellSelected } = useContext(GameContext);
  const [iPlayer] = useState<string>(getPlayer);
  const iGuess = useMemo(() => iPlayer === game.playersPosition[game.playerMove], [game, iPlayer]);

  const handleClick = (index: number) => {
    if (iGuess && !game.winner) {
      setCellSelected(index === cellSelected ? null : index);
    }
  };

  return (
    <GameBoardContainer>
      {game.board.map((cell, i: number) => (
        <BoardCell key={i} myTurn={iGuess && !game.winner} onClick={() => handleClick(i)} selected={cellSelected === i}>
          {cell && (
            <>
              {cell.large && <Chip size={CircleSize.LARGE} color={cell.large.color} />}
              {cell.medium && <Chip size={CircleSize.MEDIUM} color={cell.medium.color} />}
              {cell.small && <Chip size={CircleSize.SMALL} color={cell.small.color} />}
            </>
          )}
        </BoardCell>
      ))}
    </GameBoardContainer>
  );
};
