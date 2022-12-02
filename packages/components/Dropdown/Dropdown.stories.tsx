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
    <Container>
      <Title>Dropdown Scroll에 따른 Position 오류 // 미완성</Title>
      <FlexRow>
        <Dropdown>
          <Dropdown.Button shadow color="primary">
            Actions
          </Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.MenuItem
              onClick={() => {
                alert('sdf');
              }}
            >
              First Action
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
            <Dropdown.MenuItem>Third Acition</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
        <Spacer x={10} />
        <Dropdown>
          <Dropdown.Button shadow color="warning">
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
        <Spacer x={10} />
        <Dropdown>
          <Dropdown.Button shadow color="error">
            Actions
          </Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.MenuItem
              onClick={() => {
                alert('sdf');
              }}
            >
              First Action
            </Dropdown.MenuItem>
            <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
            <Dropdown.MenuItem>Third Acition</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
        <Spacer x={10} />
        <Dropdown>
          <Dropdown.Button shadow color="secondary">
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
    </Container>
  );
};
const Container = styled.div`
  height: 200vh;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
`;
