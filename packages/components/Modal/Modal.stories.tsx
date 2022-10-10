import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import React, { useState } from 'react';
import { Button } from '../Button';
import styled from '@emotion/styled';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Button onClick={openModal}>버튼</Button>
      <Modal isOpen={visible} onClose={closeModal} />
    </Container>
  );
};

const Container = styled.div`
  height: 200vh;
`;

export const Default = Template.bind({});

// Default.args = {
//   children: 'A Basic Modal',
// };
