import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  NumberInputStepper,
  NumberInputStepperProps,
} from './NumberInputStepper';
import React from 'react';
import styled from '@emotion/styled';

export default {
  title: 'Components/NumberInputStepper',
  component: NumberInputStepper,
} as ComponentMeta<typeof NumberInputStepper>;

const Template: ComponentStory<typeof NumberInputStepper> = (
  args: NumberInputStepperProps,
) => {
  return <NumberInputStepper {...args} />;
};

export const Default = Template.bind({});

export const WithSize = () => {
  return (
    <Container>
      <NumberInputStepper size="sm" />
      <NumberInputStepper size="lg" />
    </Container>
  );
};

export const WithMinAndMax = () => {
  return (
    <Container>
      <div>min: 10, max: 20</div>
      <NumberInputStepper min={10} max={20} size="lg" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
