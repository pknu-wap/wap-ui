import * as S from './Card.styles';
import React from 'react';

export type CardVariantType = 'shadow' | 'flat' | 'bordered';

export interface Props {
  children: React.ReactNode;
  variant?: CardVariantType;
  isPressable?: boolean;
}

export const Card = ({
  children,
  variant = 'shadow',
  isPressable = false,
}: Props) => {
  return (
    <S.StyledCard variant={variant} isPressable={isPressable}>
      {children}
    </S.StyledCard>
  );
};
