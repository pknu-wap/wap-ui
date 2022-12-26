import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';
import React from 'react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  return (
    <FlexColumn>
      <TextInput {...args} />
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Default',
};

export const Bordered = () => {
  return (
    <FlexColumn>
      <TextInput placeholder="primary" color="primary" variant="bordered" />
      <TextInput placeholder="error" color="error" variant="bordered" />
      <TextInput placeholder="secondary" color="secondary" variant="bordered" />
      <TextInput placeholder="success" color="success" variant="bordered" />
      <TextInput placeholder="warning" color="warning" variant="bordered" />
    </FlexColumn>
  );
};

export const Underlined = () => {
  return (
    <FlexColumn>
      <TextInput placeholder="primary" color="primary" variant="underlined" />
      <TextInput placeholder="error" color="error" variant="underlined" />
      <TextInput
        placeholder="secondary"
        color="secondary"
        variant="underlined"
      />
      <TextInput placeholder="success" color="success" variant="underlined" />
      <TextInput placeholder="warning" color="warning" variant="underlined" />
    </FlexColumn>
  );
};
