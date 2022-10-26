import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, Props } from './Tooltip';
import { Spacer } from '../../layouts';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: Props) => (
  <>
    <Spacer x={5} y={5} />
    <Tooltip {...args}>
      <Button shadow color="secondary">
        Hover Here
      </Button>
    </Tooltip>
  </>
);

export const Default = Template.bind({});

Default.args = {
  content: 'Boom!',
  placement: 'bottom',
  color: 'warning',
};
