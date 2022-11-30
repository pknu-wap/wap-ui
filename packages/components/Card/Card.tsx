import * as S from './Card.styles';
import React from 'react';

export type CardVariantType = 'shadow' | 'flat' | 'bordered';

export interface CardProps {
  children: React.ReactNode;
  variant?: CardVariantType;
  isPressable?: boolean;
}

/**
 * @example
 * ```tsx
 * <Card variant="shadow">
 *  lorem ipsum dolor sit amet
 * </Card>
 * <Card variant="flat">
 *  lorem ipsum dolor sit amet
 * </Card>
 * <Card variant="bordered">
 *  lorem ipsum dolor sit amet
 * </Card>
 * ```
 */
export const Card = ({
  children,
  variant = 'shadow',
  isPressable = false,
}: CardProps) => {
  return (
    <S.StyledCard variant={variant} isPressable={isPressable}>
      {children}
    </S.StyledCard>
  );
};
