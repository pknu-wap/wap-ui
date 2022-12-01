import { Button, Modal, Portal, useDisclosure } from 'wap-ui';

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button color="error" shadow onClick={onOpen}>
        Button
      </Button>
      <Portal>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.Header onClose={onClose}>Modal Header</Modal.Header>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>
            <Button color="error" shadow onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Portal>
    </>
  );
}

export default App;
