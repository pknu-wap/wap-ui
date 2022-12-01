# `[Component] Radio`

## `type`

```ts
interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  color?: NormalColorType;
  labelColor?: boolean;
}
```

## `example`

```tsx
import { Radio } from 'wap-ui';

const App = () => {
  return (
    <>
      <Radio labelText="Radio" color="primary" />
      <Radio labelText="Radio" color="success" />
      <Radio labelText="Radio" color="secondary" />
      <Radio labelText="Radio" color="warning" />
      <Radio labelText="Radio" color="error" />
    </>
  );
};
```
