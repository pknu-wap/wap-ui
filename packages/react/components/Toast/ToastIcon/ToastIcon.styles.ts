import styled from '@emotion/styled';
import { common } from '../../../theme/common';
import { palette } from '../../../theme/palette';

export const ToastIconContainer = styled.div`
  display: inline-block;
  width: 1.375rem;
  height: 1.375rem;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`;

// Success Icon

export const SuccessCircle = styled.div`
  position: absolute;
  width: 1.375rem;
  height: 1.375rem;
  background-color: ${palette.success};
  border-radius: 0.688rem;
  left: 0;
  top: 0;
`;

export const SuccessStem = styled.div`
  position: absolute;
  width: 0.188rem;
  height: 0.563rem;
  background-color: ${common.color.white};
  left: 0.688rem;
  top: 0.375rem;
`;

export const SuccessKick = styled.div`
  position: absolute;
  width: 0.188rem;
  height: 0.188rem;
  background-color: ${common.color.white};
  left: 0.5rem;
  top: 0.75rem;
`;

// Error Icon

export const ErrorCircle = styled.div`
  display: relative;
  position: absolute;
  width: 1.375rem;
  height: 1.375rem;
  background-color: ${palette.error};
  border-radius: 0.688rem;
  left: 0;
  top: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0.188rem;
    height: 0.75rem;
    background-color: ${common.color.white};
    top: 50%;
    left: 50%;
    margin-left: -0.094rem;
    margin-top: -0.375rem;
  }

  &::before {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  &::after {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
`;
