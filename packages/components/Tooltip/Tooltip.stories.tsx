import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, Props } from './Tooltip';
import { Button } from '../Button';
import styled from '@emotion/styled';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: Props) => (
  <Container>
    <Tooltip {...args}>
      <Button shadow color="secondary">
        Hover Here
      </Button>
    </Tooltip>
  </Container>
);

const Container = styled.div`
  margin-top: 10rem;
  margin-left: 10rem;
`;

export const Default = Template.bind({});

Default.args = {
  content: 'Boom!',
  placement: 'bottom',
  color: 'warning',
};
