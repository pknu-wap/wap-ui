import React, { useEffect, useState } from 'react';
import * as S from './Modal.styles';
import { ModalBody } from './ModalBody/ModalBody';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeader/ModalHeader';

export interface ModalProps {
  /**
   * @description 모달이 열려있는지 여부
   * @default false
   */
  isOpen?: boolean;
  /**
   * @description 모달이 닫힐 때 사용되는 함수
   */
  onClose: () => void;
  children: React.ReactNode;
  /**
   * @description 모달의 overlay를 blur 처리할지 여부
   * @default false
   */
  blur?: boolean;
}

/**
 * @example
 * ```jsx
 * const App = () =>{
 * const [isOpen, setIsOpen] = useState(false);
 * return (
 *  <>
 *   <button onClick={() => setIsOpen(true)}>열기</button>
 *   <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *      <Modal.Header>제목</Modal.Header>
 *      <Modal.Body>내용</Modal.Body>
 *      <Modal.Footer>
 *          <button onClick={() => setIsOpen(false)}>닫기</button>
 *      </Modal.Footer>
 *    </Modal>
 *  </>
 * );
 * };
 *
 * ```
 */
export const Modal = ({
  isOpen = false,
  onClose,
  blur = false,
  children,
}: ModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let visibleId: NodeJS.Timeout;
    if (isOpen) {
      /**
       * @description 모달이 열릴 때, visible을 true로 변경한다
       */
      setVisible(true);
      /**
       * @description 스크롤을 막기 위해 body에 overflow: hidden을 추가
       */
      document.body.style.overflow = 'hidden';
    } else {
      /**
       * @description 모달이 닫힐 때, visible을 false로 변경한다
       */
      visibleId = setTimeout(() => {
        setVisible(false);
        clearTimeout(visibleId);
      }, 100);
      /**
       * @description 스크롤 기능을 위해 body에 overflow: hidden을 제거
       */
      document.body.style.overflow = 'auto';
    }
    return () => clearTimeout(visibleId);
  }, [isOpen]);

  useEffect(() => {
    /**
     * overlay를 클릭했을 때, 0.1초 뒤에 모달을 닫는다
     */
    const closeId = setTimeout(() => {
      if (isOpen) {
        onClose();
      }
      clearTimeout(closeId);
    }, 100);
    return () => clearTimeout(closeId);
  }, [isOpen, onClose]);

  return (
    <>
      {visible && (
        <>
            <S.ModalAnimationProvider isOpen={isOpen}>
              <S.Overlay blur={blur} onClick={onClose} />
              <S.ModalContainer >{children}</S.ModalContainer>
            </S.ModalAnimationProvider>
        </>
      )}
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
