import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <Container>
    <Tooltip {...args}>
      <Button shadow size="md">
        Hover Here
      </Button>
    </Tooltip>
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  placement: 'top',
  content: 'Boooooom!',
};

export const Placement = () => {
  return (
    <Container>
      <Tooltip placement="left" content="Boooooom!">
        <Button shadow size="md">
          Left
        </Button>
      </Tooltip>
      <Tooltip placement="top" content="Boooooom!">
        <Button shadow size="md">
          Top
        </Button>
      </Tooltip>
      <Tooltip placement="bottom" content="Boooooom!">
        <Button shadow size="md">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Boooooom!">
        <Button shadow size="md">
          Right
        </Button>
      </Tooltip>
    </Container>
  );
};

export const Color = () => {
  return (
    <FlexColumn>
      <Tooltip placement="right" content="Boooooom!" color="primary">
        <Button shadow size="md" color="primary">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Boooooom!" color="success">
        <Button shadow size="md" color="success">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Boooooom!" color="secondary">
        <Button shadow size="md" color="secondary">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Boooooom!" color="warning">
        <Button shadow size="md" color="warning">
          Hover me
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Boooooom!" color="error">
        <Button shadow size="md" color="error">
          Hover me
        </Button>
      </Tooltip>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  gap: 5rem;
  margin-top: 5rem;
`;
