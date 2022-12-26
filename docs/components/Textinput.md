# `[Component] TextInput`

## `type`

```ts
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  color?: NormalColorType;
  variant?: InputVariantType;
}
```

## `example`

```tsx
import { TextInput } from '@wap-ui/react';

const App = () => {
  return (
    <>
      <TextInput placeholder="Input" color="primary" />
      <TextInput placeholder="Input" color="success" />
      <TextInput placeholder="Input" color="secondary" />
      <TextInput placeholder="Input" color="warning" />
      <TextInput placeholder="Input" color="error" />

      <TextInput placeholder="Input" color="primary" variant="underlined" />
      <TextInput placeholder="Input" color="success" variant="underlined" />
      <TextInput placeholder="Input" color="secondary" variant="underlined" />
      <TextInput placeholder="Input" color="warning" variant="underlined" />
      <TextInput placeholder="Input" color="error" variant="underlined" />
    </>
  );
};
```
