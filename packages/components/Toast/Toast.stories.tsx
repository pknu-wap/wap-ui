import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toaster, ToasterProps } from './Toaster/Toaster';
import React from 'react';
import { Button } from '../Button';

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args: ToasterProps) => {
  return (
    <>
      <Button>버튼</Button>
      <Toaster {...args} />
    </>
  );
};

export const Default = Template.bind({});
