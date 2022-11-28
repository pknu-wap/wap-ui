import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toaster, ToasterProps } from './Toaster/Toaster';
import React from 'react';
import { Button } from '../Button';
import { useToast } from './useToast';
import styled from '@emotion/styled';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args: ToasterProps) => {
  const { toast } = useToast();

  const onClick = () => {
    toast('Hello World');
  };

  const onSuccess = () => {
    toast.success('Hello World');
  };

  const onError = () => {
    toast.error('Hello World');
  };

  return (
    <>
      <FlexColumn>
        <Button onClick={onClick}>기본</Button>
        <Button color="success" size="md" onClick={onSuccess}>
          성공
        </Button>
        <Button color="error" size="md" onClick={onError}>
          실패
        </Button>
      </FlexColumn>
      <Toaster {...args} />
    </>
  );
};

export const Default = Template.bind({});

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
