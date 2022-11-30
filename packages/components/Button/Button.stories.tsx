import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Spacer } from '../../layouts/Spacer';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <FlexColumn>
    <Button {...args} />
  </FlexColumn>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};

export const Size = () => {
  return (
    <FlexColumn>
      <Button shadow size="sm">
        sm
      </Button>
      <Spacer />
      <Button shadow size="md">
        md
      </Button>
      <Spacer />
      <Button shadow size="lg">
        lg
      </Button>
      <Spacer />
      <Button shadow size="auto">
        auto
      </Button>
    </FlexColumn>
  );
};

export const Color = () => {
  return (
    <FlexColumn>
      <Button shadow color="primary">
        primary
      </Button>
      <Spacer />
      <Button shadow color="error">
        error
      </Button>
      <Spacer />
      <Button shadow color="secondary">
        secondary
      </Button>
      <Spacer />
      <Button shadow color="success">
        success
      </Button>
      <Spacer />
      <Button shadow color="warning">
        warning
      </Button>
    </FlexColumn>
  );
};

export const Shadow = () => {
  return (
    <FlexColumn>
      <Button>default</Button>
      <Spacer />
      <Button shadow>shadow</Button>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
