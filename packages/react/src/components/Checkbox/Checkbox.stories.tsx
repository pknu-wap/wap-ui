import { NormalColorType } from '../../theme';
import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Spacer } from '../../layouts/Spacer';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof Checkbox> = (_: CheckboxProps) => {
  const CHECKBOX_LIST: { id: number; data: NormalColorType }[] = [
    { id: 1, data: 'primary' },
    { id: 2, data: 'success' },
    { id: 3, data: 'secondary' },
    { id: 4, data: 'warning' },
    { id: 5, data: 'error' },
  ];
  const [selected, setSelected] = useState<NormalColorType[]>([
    'primary',
    'success',
    'error',
    'secondary',
    'warning',
  ]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCheckedElement = (checked: any, item: any) => {
    if (checked) {
      setSelected([...selected, item]);
    } else if (!checked) {
      setSelected(selected.filter((el) => el !== item));
    }
  };

  return (
    <FlexColumn>
      {CHECKBOX_LIST.map((checkbox) => (
        <FlexColumn key={checkbox.id}>
          <Checkbox
            color={checkbox.data}
            labelText={checkbox.data}
            value={checkbox.data}
            onChange={(e) => {
              onCheckedElement(e.target.checked, e.target.value);
            }}
            // 3️⃣ 체크표시 & 해제를 시키는 로직. 배열에 data가 있으면 true, 없으면 false
            checked={selected.includes(checkbox.data) ? true : false}
          />
          <Spacer />
        </FlexColumn>
      ))}
      <div>Selected : {selected.join(', ')}</div>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Default = Template.bind({});
