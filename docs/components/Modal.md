# `[Component] Modal`

## `type`

```tsx
interface ModalProps {
  /**
   * @description 모달이 열려있는지 여부
   * @default false
   */
  isOpen?: boolean;
  /**
   * @description 모달이 닫힐 때 사용되는 함수
   */
  onClose: () => void;
  children: React.ReactNode;
  /**
   * @description 모달의 overlay를 blur 처리할지 여부
   * @default false
   */
  blur?: boolean;
}

interface ModalHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  onClose: () => void;
}

type ModalBodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type ModalFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
```

## `example`

```tsx
import { Modal, Button, useDisclosure } from '@wap-ui/react';
import styled from '@emotion/styled';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Button onClick={onOpen}>버튼</Button>
      <Modal blur isOpen={isOpen} onClose={onClose}>
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
};

const Container = styeld.div`
  height: 100vh;
`;
```
