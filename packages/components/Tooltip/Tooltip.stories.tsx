import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, Props } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: Props) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Tooltip',
};
