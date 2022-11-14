import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';
import React from 'react';
import styled from '@emotion/styled';

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

const Container = styled.div`
  height: 200vh;
`;

export const Default = Template.bind({});
