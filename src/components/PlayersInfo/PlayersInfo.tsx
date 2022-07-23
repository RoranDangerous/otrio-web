import React, { useContext } from 'react';
import { GameContext } from '../../pages/Game/GameContext';
import { Chip } from '../Chip';
import { CircleSize } from '../Chip/Chip.styles';
import { ChipQTY, ChipContainer, OptionsContainer, PlayerCell, PlayersContainer } from './PlayersInfo.styles';

export const PlayersInfo = () => {
  const { game } = useContext(GameContext);
  const playerNames = game.playersPosition;
  const players = game.players;

  return (
    <PlayersContainer>
      {playerNames.map((playerName) => (
        <PlayerCell
          key={playerName}
          isTurn={!game.winner && game.playersPosition[game.playerMove] === playerName}
          isWinner={game.winner === playerName}
          isLoser={!!game.winner && game.winner !== playerName}
        >
          <p>{playerName}</p>

          <OptionsContainer>
            <div>
              <ChipContainer>
                <Chip size={CircleSize.LARGE} color={players[playerName].color} />
              </ChipContainer>
              <ChipQTY>x{players[playerName].chips.large}</ChipQTY>
            </div>
            <div>
              <ChipContainer>
                <Chip size={CircleSize.MEDIUM} color={players[playerName].color} />
              </ChipContainer>
              <ChipQTY>x{players[playerName].chips.medium}</ChipQTY>
            </div>
            <div>
              <ChipContainer>
                <Chip size={CircleSize.SMALL} color={players[playerName].color} />
              </ChipContainer>
              <ChipQTY>x{players[playerName].chips.small}</ChipQTY>
            </div>
          </OptionsContainer>
        </PlayerCell>
      ))}
    </PlayersContainer>
  );
};
