# `[Component] Toast`

## `type`

```ts
interface ToasterProps {
  /**
   * toast message의 위치
   * @default 'bottom-center'
   */
  position?: ToastPosition;
}

interface Toast {
  id: number;
  message: string;
  type?: 'success' | 'error';
}

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
```

## `example`

```tsx
import { useToast, Toaster } from '@wap-ui/react';

const App = () => {
  const { toast } = useToast();

  const onClick = () => {
    toast('Hello World');
  };

  const onSuccess = () => {
    toast.success('Hello World');
  };

  const onError = () => {
    toast.error('Hello World');
  };

  return (
    <>
      <button onClick={onClick} />
      <button onClick={onSuccess} />
      <button onClick={onError} />
      <Toaster />
    </>
  );
};
```
