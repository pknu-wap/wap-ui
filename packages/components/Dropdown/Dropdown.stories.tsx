import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import React from 'react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => {
  return (
    <FlexColumn>
      <Dropdown {...args} />
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`;

export const Default = Template.bind({});

Default.args = {
  children: 'A Basic Dropdown',
};
