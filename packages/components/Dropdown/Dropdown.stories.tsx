import styled from '@emotion/styled';
import { ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import React from 'react';
import { Spacer } from '../../layouts';
import { DropdownButton } from '../Dropdown/DropdownButton';

export default {
  title: 'Components/Dropdown',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

export const Defulat = () => {
  return (
    <FlexRow>
      <Spacer x={3} />
      <Dropdown>
        <Dropdown.Button shadow color="error">
          Actions
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem>First Action</Dropdown.MenuItem>
          <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
          <Dropdown.MenuItem>Third Acition</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
      <Spacer x={10} />
      <Dropdown>
        <Dropdown.Button shadow color="success">
          Actions
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem onClick={() => console.log('sdf')}>
            Create a Copy
          </Dropdown.MenuItem>
          <Dropdown.MenuItem>Download</Dropdown.MenuItem>
          <Dropdown.MenuItem>Delete</Dropdown.MenuItem>
          <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
          <Dropdown.MenuItem>Write Something</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </FlexRow>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 1000px;
`;
