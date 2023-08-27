import React, { useRef, useState } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ArrowUpSVG from './vectors/ArrowUpSVG';
import ArrowDownSVG from './vectors/ArrowDownSVG';

export interface NumberInputStepperProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'lg';
}
export const NumberInputStepper = ({
  value,
  onChange,
  min = 1,
  max = 999,
  size = 'sm',
}: NumberInputStepperProps) => {
  const [numberInputValue, setNumberInputValue] = useState<number>(
    value || min,
  );
  const numberInputRef = useRef<HTMLInputElement>(null);

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/\D/.test(e.target.value)) return;

    const value = Number(e.target.value);

    setNumberInputValue(value);
  };

  const handleNumberInputFocus = () => {
    numberInputRef.current?.select();
  };

  const handleNumberInputBlur = () => {
    let value = numberInputValue;

    if (numberInputValue > max) value = max;
    if (numberInputValue < min) value = min;

    setNumberInputValue(value);
    onChange?.(value);
  };

  const handleNumberInputIncrement = () => {
    if (numberInputValue >= max) return;

    setNumberInputValue(numberInputValue + 1);
    onChange?.(numberInputValue + 1);
  };

  const handleNumberInputDecrement = () => {
    if (numberInputValue <= min) return;

    setNumberInputValue(numberInputValue - 1);
    onChange?.(numberInputValue - 1);
  };

  return (
    <Container size={size}>
      <NumberInputField
        type="text"
        inputMode="numeric"
        value={numberInputValue}
        onChange={handleNumberInputChange}
        onFocus={handleNumberInputFocus}
        onBlur={handleNumberInputBlur}
        ref={numberInputRef}
      />
      <NumberInputStepperWrapper>
        <NumberInputIncrementStepper
          onClick={handleNumberInputIncrement}
          disabled={numberInputValue === max}
        >
          <ArrowUpSVG />
        </NumberInputIncrementStepper>
        <NumberInputDecrementStepper
          onClick={handleNumberInputDecrement}
          disabled={numberInputValue === min}
        >
          <ArrowDownSVG />
        </NumberInputDecrementStepper>
      </NumberInputStepperWrapper>
    </Container>
  );
};

const Container = styled.div<Pick<Required<NumberInputStepperProps>, 'size'>>`
  display: flex;
  align-items: center;
  background-color: #ffffff;

  ${(props) =>
    props.size === 'sm' &&
    css`
      width: 64px;
      height: 28px;
      input {
        font-size: 12px;
      }
      svg {
        width: 6px;
        height: 6px;
      }
    `}
  ${(props) =>
    props.size === 'lg' &&
    css`
      width: 114px;
      height: 60px;
      input {
        font-size: 24px;
      }
      svg {
        width: 8px;
        height: 8px;
      }
    `}
`;

const NumberInputField = styled.input`
  width: 65%;
  height: 100%;
  text-align: center;
  border: 1px solid #dddddd;
  padding: 5px;
`;

const NumberInputStepperWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StepperButtonBase = styled.button`
  border: 1px solid #dddddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const NumberInputIncrementStepper = styled(StepperButtonBase)<{
  disabled: boolean;
}>`
  ${(props) =>
    props.disabled &&
    css`
      svg {
        color: #b1b3b5;
      }
      cursor: not-allowed;
    `}
`;

const NumberInputDecrementStepper = styled(StepperButtonBase)<{
  disabled: boolean;
}>`
  ${(props) =>
    props.disabled &&
    css`
      svg {
        color: #b1b3b5;
      }
      cursor: not-allowed;
    `}
`;
