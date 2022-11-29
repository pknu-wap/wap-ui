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
      <FlexRow>
        <Loader type="spinner" size={size} />
        <Loader type="spinner" color="error" size={size} />
        <Loader type="spinner" color="secondary" size={size} />
        <Loader type="spinner" color="success" size={size} />
        <Loader type="spinner" color="warning" size={size} />
      </FlexRow>
    </Container>
  );
};

export const Bars = ({ size }: Pick<BarsProps, 'size'>) => {
  return (
    <Container>
      <FlexRow>
        <Loader type="bars" size={size} />
        <Loader type="bars" color="error" size={size} />
        <Loader type="bars" color="secondary" size={size} />
        <Loader type="bars" color="success" size={size} />
        <Loader type="bars" color="warning" size={size} />
      </FlexRow>
    </Container>
  );
};

export const Dots = ({ size }: Pick<DotsProps, 'size'>) => {
  return (
    <Container>
      <FlexRow>
        <Loader type="dots" size={size} />
        <Loader type="dots" color="error" size={size} />
        <Loader type="dots" color="secondary" size={size} />
        <Loader type="dots" color="success" size={size} />
        <Loader type="dots" color="warning" size={size} />
      </FlexRow>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100vh;
  padding: 3rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
