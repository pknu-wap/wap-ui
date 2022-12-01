# `[Component] Checkbox`

## `type`

```ts
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
}
```

## `example`

```tsx
import { Checkbox } from 'wap-ui';

const App = () => {
  return (
    <>
      <Checkbox labelText="Checkbox" color="primary" />
      <Checkbox labelText="Checkbox" color="success" />
      <Checkbox labelText="Checkbox" color="secondary" />
      <Checkbox labelText="Checkbox" color="warning" />
      <Checkbox labelText="Checkbox" color="error" />
    </>
  );
};
```
