import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Props } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
