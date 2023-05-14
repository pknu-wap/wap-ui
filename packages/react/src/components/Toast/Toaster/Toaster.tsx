import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ToastBar } from '../ToastBar/ToastBar';
import { getToastList } from '../useToast';
import * as S from './Toaster.styles';
import { usePortal } from '../../../hooks';
import { createPortal } from 'react-dom';

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToasterProps {
  /**
   * toast message의 위치
   * @default 'bottom-center'
   */
  position?: ToastPosition;
}

export interface Toast {
  id: number;
  message: string;
  type?: 'success' | 'error';
}

/**
 * toast message의 위치에 따른 style을 반환하는 함수
 */
const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
  const top = position.includes('top');
  const vertical: React.CSSProperties = top
    ? { top: '1rem' }
    : { bottom: '1rem' };
  const horizontal: React.CSSProperties = position.includes('center')
    ? { justifyContent: 'center' }
    : position.includes('right')
    ? {
        justifyContent: 'flex-end',
        paddingRight: '1rem',
      }
    : { marginLeft: '1rem' };

  return {
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    ...vertical,
    ...horizontal,
  };
};

/**
 *
 * ```jsx
 * const App = () =>{
 *  const {toast} = useToast();
 *
 *  const onClick = () => {
 *   toast('Hello World');
 * };
 *
 *  const onSuccess = () => {
 *  toast.success('Hello World');
 * };
 *
 * const onError = () => {
 * toast.error('Hello World');
 * };
 *
 *  return (
 *  <>
 *   <button onClick={onClick} />
 *   <button onClick={onSuccess} />
 *   <button onClick={onError} />
 *   <Toaster />
 *  </>
 * )
 * }
 * ```
 */

export const Toaster = ({ position = 'bottom-center' }: ToasterProps) => {
  const el = usePortal('toast');
  const positionStyles = getPositionStyles(position);
  const [isBottom, setIsBottom] = useState(true);
  const toastList = getToastList();

  useEffect(() => {
    if (position.includes('top')) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, [position, setIsBottom]);

  if (!el) return null;

  return createPortal(
    <AnimatePresence>
      <S.Wrapper style={positionStyles}>
        <S.ToastList isBottom={isBottom}>
          {toastList.map((toast) => (
            <ToastBar key={toast.id} type={toast.type}>
              {toast.message}
            </ToastBar>
          ))}
        </S.ToastList>
      </S.Wrapper>
    </AnimatePresence>,
    el,
  );
};
