import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import React from 'react';
import { Button } from '../Button';
import styled from '@emotion/styled';
import useDisclosure from '../../hooks/useDisclosure';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Button onClick={onOpen}>버튼</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header onClose={onClose}>Header</Modal.Header>
        <Modal.Body>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <Button>Body Button</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
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
