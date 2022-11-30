import React from 'react';
import styled from '@emotion/styled';
import { ComponentMeta } from '@storybook/react';
import { Spacer } from '../../layouts';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default = () => {
  return (
    <FlexColumn>
      <Spacer y={2} />
      <Toggle labelText="primary" color="primary" defaultChecked />
      <Spacer />
      <Toggle labelText="error" color="error" defaultChecked />
      <Spacer />
      <Toggle labelText="secondary" color="secondary" defaultChecked />
      <Spacer />
      <Toggle labelText="success" color="success" defaultChecked />
      <Spacer />
      <Toggle labelText="warning" color="warning" defaultChecked />
    </FlexColumn>
  );
};

export const Size = () => {
  return (
    <FlexColumn>
      <Spacer y={2} />
      <Toggle labelText="primary" color="primary" variant="lg" defaultChecked />
      <Spacer />
      <Toggle labelText="error" color="error" variant="lg" defaultChecked />
      <Spacer />
      <Toggle
        labelText="secondary"
        color="secondary"
        variant="lg"
        defaultChecked
      />
      <Spacer />
      <Toggle labelText="success" color="success" variant="lg" defaultChecked />
      <Spacer />
      <Toggle labelText="warning" color="warning" variant="lg" defaultChecked />
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
