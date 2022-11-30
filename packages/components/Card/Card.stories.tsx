import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer } from '../../layouts/Spacer';
import { Card, CardProps } from './Card';
import React from 'react';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => {
  return (
    <FlexColumn>
      <Card {...args} />
      <Spacer />
      <Card variant="bordered">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
        eius velit excepturi distinctio, blanditiis sunt, quod architecto
        voluptate perspiciatis ea corporis voluptatum, reprehenderit vero harum
        ratione animi hic cum.
      </Card>
      <Spacer />
      <Card variant="flat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
        eius velit excepturi distinctio, blanditiis sunt, quod architecto
        voluptate perspiciatis ea corporis voluptatum, reprehenderit vero harum
        ratione animi hic cum.
      </Card>
      <Spacer />
      <Card variant="shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
        eius velit excepturi distinctio, blanditiis sunt, quod architecto
        voluptate perspiciatis ea corporis voluptatum, reprehenderit vero harum
        ratione animi hic cum.
      </Card>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`;

export const Default = Template.bind({});

Default.args = {
  children: 'A Basic Card',
};
