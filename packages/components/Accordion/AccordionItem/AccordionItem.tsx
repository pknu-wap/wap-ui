import React, { useState, useEffect } from 'react';
import { useAccordionContext } from '../AccordionContext';
import * as S from './AccordionItem.styles';

export interface Props {
  children: React.ReactNode;
  label: string;
  expanded?: boolean;
  index?: number;
}
/**
 * @todo setChildrenIndex라는 chilren에 자동으로 index값 부여해주는 util 함수를 만들기 / Accoridion Component에서 처리
 * @see https://github.dev/nextui-org/nextui/blob/main/packages/react/src/utils/collections.ts
 */

export const AccordionItem = ({
  children,
  label,
  expanded = false,
  index,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const { values, updateValues } = useAccordionContext();

  useEffect(() => {
    if (visible !== expanded) {
      setVisible(expanded);
    }
  }, [expanded]);

  useEffect(() => {
    if (values.length) return;
    const isActive = !!values.find((v) => v === index);
    setVisible(isActive);
  }, [values.join(',')]);

  return (
    <S.Root>
      <S.Label visible={visible} onClick={() => setVisible(!visible)}>
        {label}
      </S.Label>
      <S.ContentWrapper visible={visible}>
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
    </S.Root>
  );
};
