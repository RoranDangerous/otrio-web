import React, { useContext, useMemo } from 'react';
import { GameContext } from '../../pages/Game/GameContext';
import { move } from '../../utils/ajax';
import { getPlayer } from '../../utils/auth';
import { Chip } from '../Chip';
import { CircleSize } from '../Chip/Chip.styles';
import { OptionCell, OptionsContainer } from './ChipOptions.styles';

export const ChipOptions = () => {
  const { game, cellSelected, setCellSelected } = useContext(GameContext);
  const playerColor = useMemo(() => game.players[getPlayer()].color, [game]);
  const playerChips = useMemo(() => game.players[getPlayer()].chips, [game]);
  const cell = useMemo(() => (cellSelected !== null ? game.board[cellSelected] : null), [game, cellSelected]);

  const handleOptionClick = async (size: string) => {
    if (cellSelected === null) {
      return;
    }

    await move(cellSelected, size);
    setCellSelected(null);
  };

  const canUseLargeChip = playerChips.large > 0 && !cell?.large;
  const canUseMediumChip = playerChips.medium > 0 && !cell?.medium;
  const canUseSmallChip = playerChips.small > 0 && !cell?.small;

  return (
    <OptionsContainer visible={cellSelected !== null}>
      <OptionCell disabled={!canUseLargeChip} onClick={() => canUseLargeChip && handleOptionClick('large')}>
        <Chip size={CircleSize.LARGE} color={playerColor} />
      </OptionCell>
      <OptionCell disabled={!canUseMediumChip} onClick={() => canUseMediumChip && handleOptionClick('medium')}>
        <Chip size={CircleSize.MEDIUM} color={playerColor} />
      </OptionCell>
      <OptionCell disabled={!canUseSmallChip} onClick={() => canUseSmallChip && handleOptionClick('small')}>
        <Chip size={CircleSize.SMALL} color={playerColor} />
      </OptionCell>
    </OptionsContainer>
  );
};
