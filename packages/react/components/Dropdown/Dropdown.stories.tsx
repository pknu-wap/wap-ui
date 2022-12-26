import styled from '@emotion/styled';
import { ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import React from 'react';
import { Spacer } from '../../layouts';
import { DropdownButton } from './DropdownButton';

export default {
  title: 'Components/Dropdown',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

export const Defulat = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Button shadow>Actions</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem onAction={() => console.log('sdf')}>
            Create a Copy
          </Dropdown.MenuItem>
          <Dropdown.MenuItem>Download</Dropdown.MenuItem>
          <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
          <Dropdown.MenuItem>Write Something</Dropdown.MenuItem>
          <Dropdown.MenuItem
            onAction={() => alert('Delete Something')}
            color="error"
          >
            Delete
          </Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const variousLocation = () => {
  return (
    <Container>
      <FlexColumn>
        <FlexRow>
          <Dropdown>
            <Dropdown.Button shadow>Actions</Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
              <Dropdown.MenuItem
                onAction={() => alert('Download Something')}
                color="primary"
              >
                Download
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
              <Dropdown.MenuItem>Write Something</Dropdown.MenuItem>
              <Dropdown.MenuItem
                onAction={() => alert('Delete Something')}
                color="error"
              >
                Delete
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer x={10} />
          <Dropdown>
            <Dropdown.Button shadow color="error">
              Actions
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
              <Dropdown.MenuItem>Download</Dropdown.MenuItem>
              <Dropdown.MenuItem>Mark as Draft</Dropdown.MenuItem>
              <Dropdown.MenuItem>Write Something</Dropdown.MenuItem>
              <Dropdown.MenuItem
                onAction={() => alert('Delete Something')}
                color="error"
              >
                Delete
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer x={10} />
          <Dropdown>
            <Dropdown.Button shadow color="success">
              Actions
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem>Create a Copy</Dropdown.MenuItem>
              <Dropdown.MenuItem>Download</Dropdown.MenuItem>
              <Dropdown.MenuItem
                onAction={() => alert('Mark as Draft Something')}
                color="success"
              >
                Mark as Draft
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>Write Something</Dropdown.MenuItem>
              <Dropdown.MenuItem
                onAction={() => alert('Delete Something')}
                color="error"
              >
                Delete
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </FlexRow>
        <Spacer y={16} />
        <FlexRow>
          <Dropdown>
            <Dropdown.Button shadow color="secondary">
              Actions
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem
                onAction={() => alert('Booooommmm!!!')}
                color="secondary"
              >
                First Action
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
              <Dropdown.MenuItem>Third Action</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer x={10} />
          <Dropdown>
            <Dropdown.Button shadow color="warning">
              Actions
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem
                onAction={() => alert('Boooomm!!!')}
                color="warning"
              >
                First Action
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
              <Dropdown.MenuItem>Third Action</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer x={10} />
          <Dropdown>
            <Dropdown.Button shadow>Actions</Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.MenuItem
                onAction={() => alert('Boooooom!')}
                color="primary"
              >
                First Action
              </Dropdown.MenuItem>
              <Dropdown.MenuItem>Second Action</Dropdown.MenuItem>
              <Dropdown.MenuItem>Third Action</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </FlexRow>
      </FlexColumn>
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
