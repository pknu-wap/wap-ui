import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toaster, ToasterProps } from './Toaster/Toaster';
import React from 'react';
import { Button } from '../Button';
import { useToast } from './useToast';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args: ToasterProps) => {
  const { toast } = useToast();
  const onClick = () => {
    toast(`Hello World ${Math.floor(Math.random() * 10)}`);
  };

  return (
    <>
      <Button onClick={onClick}>버튼</Button>
      <Toaster {...args} />
    </>
  );
};

export const Default = Template.bind({});
