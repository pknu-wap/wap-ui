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
      <Modal isOpen={visible} onClose={closeModal}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Modal>
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
