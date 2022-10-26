import React, { useEffect, useState } from 'react';
import * as S from './Modal.styles';

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
      visibleId = setTimeout(() => setVisible(false), 100);
      document.body.style.overflow = 'auto';
    }
    return () => clearTimeout(visibleId);
  }, [isOpen]);

  return (
    <>
      {visible && (
        <>
          <S.Overlay onClick={onClose} />
          <S.Container isOpen={isOpen}>
            <S.ModalElement>{children}</S.ModalElement>
          </S.Container>
        </>
      )}
    </>
  );
};
