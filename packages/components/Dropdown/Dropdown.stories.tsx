import styled from '@emotion/styled';
import { ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import React from 'react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default = () => {
  return (
    <FlexColumn>
      <Dropdown>
        <Dropdown.Button>Actions</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
          <Dropdown.MenuItem>Download</Dropdown.MenuItem>
          <Dropdown.MenuItem>Delete</Dropdown.MenuItem>
          <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`;
