# `[Hook] useDisclosure`

## `description`

{열린상태, 열기, 닫기, 토글} 의 기능을 가진다.

## `type`

```ts
interface Props {
  defaultIsOpen?: boolean;
}
```

## `example`

```tsx
import { Modal, useDisclosure } from '@wap-ui/react';

const App = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>열기</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header>제목</Modal.Header>
        <Modal.Body>내용</Modal.Body>
        <Modal.Footer>
          <button onClick={onClose}>닫기</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
```
