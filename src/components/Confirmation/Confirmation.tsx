import React, { useContext } from 'react';
import { GameContext } from '../../pages/Game/GameContext';
import { ButtonPrimary } from '../../styles';
import { startGame } from '../../utils/ajax';
import { getPlayer } from '../../utils/auth';
import { ColorSelect } from '../ColorSelect';
import { PlayerItem, PlayersList, RoomCode } from './Confirmation.styles';

type ConfirmationProps = {
  code: string;
  players: Record<string, Record<string, any>>;
  canConfirm: boolean;
};

export const Confirmation: React.FC<ConfirmationProps> = ({ code, players, canConfirm }) => {
  const { game } = useContext(GameContext);

  const onButtonClick = async () => {
    await startGame(code, getPlayer());
  };

  const sortByScore = (player1: string, player2: string) =>
    (players[player2].score as number) - (players[player1].score as number);

  return (
    <>
      <RoomCode onClick={() => navigator.clipboard.writeText(window.location.href)}>{code}</RoomCode>
      <PlayersList>
        {Object.keys(players)
          .sort(sortByScore)
          .map((player, i) => (
            <PlayerItem isCurrent={player === getPlayer()} key={player}>
              <div>
                <ColorSelect color={game.players[player].color}/>{i + 1}. {player}
              </div>
              <p>{players[player].score}</p>
            </PlayerItem>
          ))}
      </PlayersList>
      {canConfirm && (
        <ButtonPrimary onClick={onButtonClick} disabled={Object.keys(players).length <= 1}>
          Lock the door
        </ButtonPrimary>
      )}
    </>
  );
};
