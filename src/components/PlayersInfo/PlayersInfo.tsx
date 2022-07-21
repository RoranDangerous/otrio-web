import React, { useContext } from 'react';
import { GameContext } from '../../pages/Game/GameContext';
import { Chip } from '../Chip';
import { CircleSize } from '../Chip/Chip.styles';
import { ChipQTY, ChipContainer, OptionsContainer, PlayerCell, PlayersContainer } from './PlayersInfo.styles';

export const PlayersInfo = () => {
  const { game } = useContext(GameContext);
  const players = Object.entries(game.players);

  return (
    <PlayersContainer>
      {players.map(([playerName, player]) => (
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
                <Chip size={CircleSize.LARGE} color={player.color} />
              </ChipContainer>
              <ChipQTY>x{player.chips.large}</ChipQTY>
            </div>
            <div>
              <ChipContainer>
                <Chip size={CircleSize.MEDIUM} color={player.color} />
              </ChipContainer>
              <ChipQTY>x{player.chips.medium}</ChipQTY>
            </div>
            <div>
              <ChipContainer>
                <Chip size={CircleSize.SMALL} color={player.color} />
              </ChipContainer>
              <ChipQTY>x{player.chips.small}</ChipQTY>
            </div>
          </OptionsContainer>
        </PlayerCell>
      ))}
    </PlayersContainer>
  );
};
