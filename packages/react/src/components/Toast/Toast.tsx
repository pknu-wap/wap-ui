import React from 'react';
import styled from '@emotion/styled';
import { ToastOptions } from './types';
import SuccessStatusSVG from './vectors/SuccessStatusSVG';
import ErrorStatusSVG from './vectors/ErrorStatusSVG';
import InfoStatusSVG from './vectors/InfoStatusSVG';
import CrossSVG from './vectors/CrossSVG';

export interface ToastProps {
  title?: string;
  description?: string;
  status: ToastOptions['status'];
  onClose: () => void;
}

export const Toast = ({ title, description, status, onClose }: ToastProps) => {
  const toastStatus = toastStatusMap[status];

  return (
    <Container toastColor={toastStatus.color}>
      <ToastIcon>{toastStatus.icon}</ToastIcon>
      <ToastContent>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastContent>
      <CloseButton onClick={onClose}>
        <CrossSVG />
      </CloseButton>
    </Container>
  );
};

const toastStatusMap: {
  [key in ToastOptions['status']]: { color: string; icon: React.ReactNode };
} = {
  success: {
    color: '#2ecc71',
    icon: <SuccessStatusSVG />,
  },
  error: {
    color: '#ef5350',
    icon: <ErrorStatusSVG />,
  },
  info: {
    color: '#42a5f5',
    icon: <InfoStatusSVG />,
  },
};

const Container = styled.div<{
  toastColor: string;
}>`
  position: relative;
  display: flex;
  pointer-events: auto;
  max-width: 400px;
  min-width: 250px;
  margin: 0.5rem;
  padding: 16px 32px 16px 16px;
  border-radius: 6px;
  color: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  background-color: ${(props) => props.toastColor};
`;

const ToastIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: auto 0;
`;

const ToastTitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const ToastDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  svg {
    color: #fff;
    width: 18px;
    height: 18px;
  }
`;
