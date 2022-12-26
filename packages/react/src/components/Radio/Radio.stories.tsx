import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Spacer } from '../../layouts/Spacer';
import { Radio, RadioProps } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

type RadioValues =
  | 'default'
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error';

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => {
  const [value, setValue] = useState<RadioValues>('default');

  const handleChange = (value: RadioValues) => {
    setValue(value);
  };
  return (
    <FlexColumn>
      <Radio
        value="default"
        labelText="default"
        labelColor
        checked={value === 'default'}
        onChange={() => handleChange('default')}
        {...args}
      />
      <Spacer y={2} />
      <Radio
        value="primary"
        labelText="primary"
        labelColor
        color="primary"
        checked={value === 'primary'}
        onChange={() => handleChange('primary')}
      />
      <Spacer />
      <Radio
        value="success"
        labelText="success"
        labelColor
        color="success"
        checked={value === 'success'}
        onChange={() => handleChange('success')}
      />
      <Spacer />
      <Radio
        value="secondary"
        labelText="secondary"
        labelColor
        color="secondary"
        checked={value === 'secondary'}
        onChange={() => handleChange('secondary')}
      />
      <Spacer />
      <Radio
        value="warning"
        labelText="warning"
        labelColor
        color="warning"
        checked={value === 'warning'}
        onChange={() => handleChange('warning')}
      />
      <Spacer />
      <Radio
        value="error"
        labelText="error"
        labelColor
        color="error"
        checked={value === 'error'}
        onChange={() => handleChange('error')}
      />
      <Spacer />
      <div>value : {value}</div>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Default = Template.bind({});

Default.args = {
  labelText: '필수',
};
