import React from 'react';
import * as S from './AccordionItem.styles';

export interface Props {
  label: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ children, label }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <S.Root>
      <S.Label isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label}
      </S.Label>
      <S.ContentWrapper isOpen={isOpen}>
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
    </S.Root>
  );
};
