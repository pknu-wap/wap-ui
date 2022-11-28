import React, { SVGProps } from 'react';
import * as S from './Modal.styles';

interface ModalCloseButtonProps extends SVGProps<SVGSVGElement> {
  onClose: () => void;
}

export const ModalCloseButton = (props: ModalCloseButtonProps) => {
  return (
    <S.ModalCloseButton>
      <svg
        className="modal_close-button"
        fill="none"
        height={18}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={18}
        onClick={props.onClose}
        {...props}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </S.ModalCloseButton>
  );
};
