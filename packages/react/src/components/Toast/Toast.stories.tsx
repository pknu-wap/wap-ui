/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import useToast from './useToast';
import { ToastPosition, ToastStatus } from './types';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

export default {
  title: 'Components/Toast',
};

export const Default = {
  render: () => {
    const toast = useToast();

    const handleClick = () => {
      toast({
        title: 'Error Connecting...',
        description: 'You do not have permissions to perform this action.',
        status: 'error',
        position: 'top-left',
        duration: 5000,
      });
    };

    return (
      <Container>
        <Button type="button" onClick={handleClick}>
          Show Toast
        </Button>
      </Container>
    );
  },
};

export const Status = {
  render: () => {
    const toast = useToast();
    const statuses: ToastStatus[] = ['success', 'error', 'info'];
    const handleClick = (status: ToastStatus) => {
      toast({
        title: 'Title',
        description: 'Description',
        status,
      });
    };

    return (
      <Container>
        {statuses.map((status) => (
          <Button
            key={status}
            type="button"
            onClick={() => handleClick(status)}
            style={{ marginRight: '1rem' }}
          >
            {status}
          </Button>
        ))}
      </Container>
    );
  },
};

export const Duration = {
  render: () => {
    const toast = useToast();
    const [duration, setDuration] = useState(5000);

    const handleClick = () => {
      toast({
        title: 'Title',
        description: `${duration}ms Toast`,
        status: 'success',
        duration,
        position: 'top-left',
      });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDuration(Number(e.target.value));
    };

    return (
      <Container>
        <TextInput
          type="number"
          placeholder='Duration in "ms'
          value={duration}
          onChange={handleChange}
          style={{
            marginRight: '1rem',
            border: '1px solid #ccc',
          }}
        />
        <div>
          <Button
            type="button"
            onClick={handleClick}
            style={{
              marginRight: '1rem',
            }}
          >
            {duration}ms Toast
          </Button>
          <Button
            type="button"
            onClick={() => {
              toast({
                title: 'Title',
                description: 'Description',
                status: 'info',
                duration: null,
                position: 'top-left',
              });
            }}
          >
            Infinity Toast
          </Button>
        </div>
      </Container>
    );
  },
};

export const Placement = {
  render: () => {
    const toast = useToast();
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as ToastPosition[];

    const handleClick = (position: ToastPosition) => {
      toast({
        title: 'Title',
        description: 'Description',
        status: 'success',
        position,
      });
    };

    return (
      <FlexRow>
        {positions.map((position) => (
          <Button
            key={position}
            type="button"
            onClick={() => handleClick(position)}
            style={{ marginRight: '1rem' }}
            size="sm"
          >
            {position}
          </Button>
        ))}
      </FlexRow>
    );
  },
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FlexRow = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
