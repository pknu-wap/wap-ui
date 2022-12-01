# `[Component] Card`

## `type`

```ts
interface CardProps {
  children: React.ReactNode;
  variant?: CardVariantType;
  isPressable?: boolean;
}
```

## `example`

```tsx
import { Card } from 'wap-ui';

const App = () => {
  return (
    <>
      <Card variant="shadow">lorem ipsum dolor sit amet</Card>
      <Card variant="flat">lorem ipsum dolor sit amet</Card>
      <Card variant="bordered">lorem ipsum dolor sit amet</Card>
    </>
  );
};
```
