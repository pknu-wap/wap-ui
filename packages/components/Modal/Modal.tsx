import React, { useEffect, useState } from 'react';
import * as S from './Modal.styles';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

export interface Props {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen = false, onClose, children }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let visibleId: NodeJS.Timeout;
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      visibleId = setTimeout(() => {
        setVisible(false);
        clearTimeout(visibleId);
      }, 100);
      document.body.style.overflow = 'auto';
    }
    return () => clearTimeout(visibleId);
  }, [isOpen]);

  return (
    <>
      {visible && (
        <>
          <S.ModalAnimationProvider isOpen={isOpen}>
            <S.Overlay onClick={onClose} />
            <S.ModalElement>{children}</S.ModalElement>
          </S.ModalAnimationProvider>
        </>
      )}
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
