import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../Button';
import styled from '@emotion/styled';
import { Modal } from '../Modal';
import { Portal, Props } from './Portal';

export default {
  title: 'Components/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args: Props) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>버튼</Button>
        <Portal {...args}>
          <Modal isOpen={visible} onClose={closeModal}>
            <Modal.Header onClose={closeModal}>Header</Modal.Header>
            <Modal.Body>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <Button>Body Button</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Portal>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 200vh;
`;

export const Default = Template.bind({});

export const WidthId = Template.bind({});
WidthId.args = {
  target: 'modal',
};

export const WidthElement = Template.bind({});
WidthElement.args = {
  target: document.getElementById('modal') as HTMLElement,
};
