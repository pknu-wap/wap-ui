import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spacer } from '../../layouts';
import { Card, CardProps } from './Card';
import React from 'react';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => {
  return (
    <FlexColumn>
      <FlexRow>
        <Card {...args} />
        <Spacer />
        <Card {...args} />
        <Spacer />
        <Card {...args} />
      </FlexRow>
      <Spacer />
      <FlexRow>
        <Card {...args} />
        <Spacer />
        <Card {...args} />
        <Spacer />
        <Card {...args} />
      </FlexRow>
    </FlexColumn>
  );
};

export const Default = Template.bind({});

Default.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia eius velit excepturi distinctio, blanditiis sunt, quod architecto voluptate perspiciatis ea corporis voluptatum, reprehenderit vero harum ratione animi hic cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia eius velit excepturi distinctio, blanditiis sunt, quod architecto voluptate perspiciatis ea corporis voluptatum, reprehenderit vero harum ratione animi hic cum.',
};

export const Flat = Template.bind({});
Flat.args = {
  ...Default.args,
  variant: 'flat',
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...Default.args,
  variant: 'bordered',
};

export const Shadow = Template.bind({});
Shadow.args = {
  ...Default.args,
  variant: 'shadow',
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  gap: 10px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 1000px;
`;
