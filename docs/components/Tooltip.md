# `[Component] Tooltip`

## `type`

```ts
export interface TooltipProps {
  children: React.ReactNode;
  placement?: Placement;
  content?: React.ReactNode;
  offset?: number;
  color?: NormalColorType;
}
```

## `example`

```tsx
import { Tooltip } from 'wap-ui';

const App = () => {
  return (
    <>
      <Tooltip placement="right" content="Boooooom!" color="primary">
        <Button shadow size="md" color="primary">
          Hover me
        </Button>
      </Tooltip>
    </>
  );
};
```
