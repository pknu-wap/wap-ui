import styled from '@emotion/styled';

export const RippleContainer = styled.div<{ duration: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: rgba(255, 255, 255, 0.2);
    animation: ripple;
    animation-duration: ${({ duration }) => duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
