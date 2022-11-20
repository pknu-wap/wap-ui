import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';
import React from 'react';
import styled from '@emotion/styled';
import { BarsProps } from './Loaders/Bars/Bars';
import { DotsProps } from './Loaders/Dots/Dots';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => {
  return (
    <Container>
      <Loader {...args} />
    </Container>
  );
};

export const Default = Template.bind({});

export const Spinner = ({ size }: Pick<LoaderProps, 'size'>) => {
  return (
    <Container>
      <Loader type="spinner" size={size} />
      <Loader type="spinner" color="secondary" size={size} />
    </Container>
  );
};

export const Bars = ({ size }: Pick<BarsProps, 'size'>) => {
  return (
    <Container>
      <Loader type="bars" size={size} color="primary" />
      <Loader type="bars" size={size} color="secondary" />
    </Container>
  );
};

export const Dots = ({ size }: Pick<DotsProps, 'size'>) => {
  return (
    <Container>
      <Loader type="dots" size={size} color="primary" />
      <Loader type="dots" size={size} color="secondary" />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100vh;
  padding: 3rem;
  background-color: #5f5f5f;
`;
