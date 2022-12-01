import React, { useState, useEffect, useRef } from 'react';
import useDidMountEffect from '../../../hooks/useDidMountEffect';
import { useAccordionContext } from '../AccordionContext';
import * as S from './AccordionItem.styles';

export interface AccordionItemProps {
  children: React.ReactNode;
  /**
   * AccordionItem의 닫혔을 경우에도 보여지는 부분입니다.
   */
  label: React.ReactNode;

  /**
   * AccordionItem의 닫혔을 경우에도 보여지는 label 밑에 위치하는 부연설명입니다.
   */
  description?: React.ReactNode;

  /**
   * Accordion에 의해 자동으로 부여되는 index
   */
  index?: number;
}

export const AccordionItem = ({
  children,
  label,
  index,
  description,
}: AccordionItemProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { values, updateValues } = useAccordionContext();

  useEffect(() => {
    if (!values.length) return;
    const isActive = !!values.find((v) => v === index);
    setVisible(isActive);
  }, [values]);

  /** 첫 마운트 이후부터 visible이 변경할 때 작동한다. */
  useDidMountEffect(() => {
    if (parentRef.current === null || childRef.current === null) return;

    if (!visible) {
      parentRef.current.style.height = '0';
      parentRef.current.style.opacity = '0';
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      parentRef.current.style.opacity = '1';
    }
  }, [visible]);

  /** 다음 상태로 변경시키는 함수 */
  const handleChangeVisible = () => {
    const nextState = !visible;
    setVisible(nextState);

    /** contextApi 이용 */
    updateValues && index && updateValues(index, nextState);
  };

  return (
    <S.Root>
      <S.Label visible={visible} onClick={handleChangeVisible}>
        {label}
        {description && <S.Description>{description}</S.Description>}
      </S.Label>
      <S.ContentWrapper ref={parentRef}>
        <S.Content ref={childRef}>{children}</S.Content>
      </S.ContentWrapper>
    </S.Root>
  );
};
