import { AnimatePresence, useWillChange, type Variants } from 'framer-motion';
import React, { useLayoutEffect } from 'react';
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
  const willChange = useWillChange();

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const overlayVariants: Variants = {
    initial: {
      opacity: blur ? 1 : 0,
    },
    animate: {
      opacity: blur ? 1 : 0.5,
      // filter: blur ? 'saturate(200%) blur(100px)' : 'none',
    },
    exit: {
      opacity: blur ? 1 : 0,
    },
  };

  const modalVariants: Variants = {
    initial: {
      y: '30vh',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: '30vh',
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <S.Overlay
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              blur={blur.toString()}
              onClick={onClose}
              style={{ willChange }}
            />
            <S.Positioner>
              <S.ModalContainer
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                style={{ willChange }}
              >
                {children}
              </S.ModalContainer>
            </S.Positioner>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
