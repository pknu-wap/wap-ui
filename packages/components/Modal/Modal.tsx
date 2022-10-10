import React, { useEffect, useState } from 'react';
import * as S from './Modal.styles';

export interface Props {
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen = false, onClose }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let visibleId: NodeJS.Timeout;
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      visibleId = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = 'auto';
    }
    return () => clearTimeout(visibleId);
  }, [isOpen]);

  return <>{visible && <S.Overlay onClick={onClose} />}</>;
};
