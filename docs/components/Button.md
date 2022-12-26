# `[Component] Button`

## `type`

```ts
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'auto';
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}
```

## `example`

```tsx
import { Button } from '@wap-ui/react';

const App = () => {
  return (
    <>
      <Button color="primary" shadow>
        Button
      </Button>
      <Button color="success" shadow>
        Button
      </Button>
      <Button color="secondary" shadow>
        Button
      </Button>
      <Button color="warning" shadow>
        Button
      </Button>
      <Button color="error" shadow>
        Button
      </Button>
    </>
  );
};
```
