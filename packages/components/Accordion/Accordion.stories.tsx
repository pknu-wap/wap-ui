import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, Props } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: Props) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Accordion',
};
