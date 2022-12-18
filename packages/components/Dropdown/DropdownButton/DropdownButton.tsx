import React, { ButtonHTMLAttributes } from 'react';
import { NormalColorType } from '../../../theme/types';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownButton.styles';

export interface DropdownButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}

export const DropdownButton = ({
  children,
  color = 'primary',
  shadow = false,
  ...options
}: DropdownButtonProps) => {
  const { triggerRef, updateState, state } = useDropdownContext();
  const onChangeVisible = () => {
    updateState && updateState(!state);
  };
  return (
    <S.StyledButton
      color={color}
      shadow={shadow}
      {...options}
      ref={triggerRef}
      onClick={onChangeVisible}
    >
      {children}
    </S.StyledButton>
  );
};
