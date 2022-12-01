# `[Component] Toggle`

## `type`

```tsx
interface Toggle {
  labelText?: string;
  color?: NormalColorType;
  variant?: 'sm' | 'lg';
}

type NormalColorType =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error';
```

## `example`

```tsx
import { Toggle } from 'wap-ui';

const App = () => {
  return (
    <>
      <Toggle labelText="Toggle" color="primary" />
      <Toggle labelText="Toggle" color="success" />
      <Toggle labelText="Toggle" color="secondary" />
      <Toggle labelText="Toggle" color="warning" />
      <Toggle labelText="Toggle" color="error" />

      <Toggle labelText="Toggle" color="primary" variant="lg" />
      <Toggle labelText="Toggle" color="success" variant="lg" />
      <Toggle labelText="Toggle" color="secondary" variant="lg" />
      <Toggle labelText="Toggle" color="warning" variant="lg" />
      <Toggle labelText="Toggle" color="error" variant="lg" />
    </>
  );
};
```
