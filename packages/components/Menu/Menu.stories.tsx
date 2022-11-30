import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Menu } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => {
  return <Menu />;
};
export const Default = Template.bind({});