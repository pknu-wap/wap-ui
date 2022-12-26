import React, { useState, useMemo } from 'react';
import * as S from './Accordion.styles';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionContext, AccordionProviderProps } from './AccordionContext';
import { setChildrenIndex } from '../../utils/setChildrenIndex';

export interface AccordionProps extends AccordionProviderProps {
  children: React.ReactNode;
  /**
   * 여러개가 열리게 할 수 있는지, 하나가 열릴 때 나머지는 닫히게 할 지 결정합니다.
   */
  allowMultiple?: boolean;
}

/**
 * @example
 * ```tsx
 * <Accordion>
 *  <Accordion.Item label="Item 1" description="description">
 *    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
 *  </Accordion.Item>
 *  <Accordion.Item label="Item 2" description="description">
 *    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
 *  </Accordion.Item>
 *  <Accordion.Item label="Item 3" description="description">
 *    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
 *  </Accordion.Item>
 * </Accordion>
 *```
 */
export const Accordion = ({
  children,
  allowMultiple = false,
}: AccordionProps) => {
  const [state, setState] = useState<Array<number>>([]);

  /**
   * currentIndex: 선택한 index
   * nextState: 다음이 visible인지 unvisible인지
   */
  const updateValues = (currentIndex: number, nextState: boolean) => {
    /** 하나만 열림 */
    if (!allowMultiple) {
      /** 다음이 visible 상태 */
      if (nextState) return setState([currentIndex]);
      /** 다음이 unvisible 상태 */
      return setState([]);
    }

    /** 여러개 열림 */
    if (nextState)
      /** 다음이 visible 상태 */
      return setState([...state, currentIndex]);

    /** 다음이 unvisible 상태 */
    return setState(state.filter((v) => v !== currentIndex));
  };

  /** children을 순회하면서 index를 부여한다 */
  const hasIndexChildren = useMemo(
    () => setChildrenIndex(children, [Accordion.Item]),
    [children],
  );

  return (
    <AccordionContext.Provider value={{ values: state, updateValues }}>
      <S.Root>{hasIndexChildren}</S.Root>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
