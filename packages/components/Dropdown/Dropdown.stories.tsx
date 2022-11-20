import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import React from 'react';
import { Spacer } from '../../layouts';
import {
  DropdownButton,
  DropdownButtonProps,
} from '../Dropdown/DropdownButton';

export default {
  title: 'Components/Dropdown',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

const Template: ComponentStory<typeof DropdownButton> = (
  args: DropdownButtonProps,
) => {
  return (
    <FlexRow>
      <Spacer x={8} />
      <Dropdown>
        <Dropdown.Button {...args} />
        <Dropdown.Menu>
          <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
          <Dropdown.MenuItem>Download</Dropdown.MenuItem>
          <Dropdown.MenuItem>Delete</Dropdown.MenuItem>
          <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </FlexRow>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'secondary',
  shadow: true,
  children: 'Actions',
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 250px;
`;
