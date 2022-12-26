import styled from '@emotion/styled';
import { Button, Modal, useDisclosure } from '@wap-ui/react';

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Container>
      <Button color="error" shadow onClick={onOpen}>
        Button
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header onClose={onClose}>Header</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" color="success" shadow onClick={onClose}>
            Confirm
          </Button>
          <Button size="sm" color="error" shadow onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
