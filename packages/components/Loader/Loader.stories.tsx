import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';
import React from 'react';
import styled from '@emotion/styled';
import { Spacer } from '../../layouts';

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
      <Spacer />
      <Loader type="spinner" color="secondary" size={size} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #5f5f5f;
`;
