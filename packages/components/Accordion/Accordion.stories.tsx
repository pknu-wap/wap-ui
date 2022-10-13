import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Default = () => (
  <Accordion>
    <Accordion.Item label="Item 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      dolore harum facilis sequi recusandae fugiat, delectus iste id libero!
      Quasi, nulla sapiente illo similique culpa asperiores quisquam quos?
    </Accordion.Item>
    <Accordion.Item label="Item 2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      dolore harum facilis sequi recusandae fugiat, delectus iste id libero!
      Quasi, nulla sapiente illo similique culpa asperiores quisquam quos?
    </Accordion.Item>
    <Accordion.Item label="Item 3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto et ad,
      dolore harum facilis sequi recusandae fugiat, delectus iste id libero!
      Quasi, nulla sapiente illo similique culpa asperiores quisquam quos?
    </Accordion.Item>
  </Accordion>
);
