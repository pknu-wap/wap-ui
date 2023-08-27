# `[Hook] useDidUpdateEffect`

## `description`

useDidUpdateEffect는 컴포넌트가 마운트 된 후에만 effect를 실행합니다.
즉 마운트 시에는 실행되지 않고, deps가 변경될 때에만 실행됩니다.

## `type`

```ts
interface Props {
  effect: React.EffectCallback;
  deps: React.DependencyList;
}
```

## `example`

```tsx
import { useState } from 'react';
import { useDidUpdateEffect } from 'wap-ui';

const App = () => {
  const [count, setCount] = useState<number>(0);

  useDidUpdateEffect(() => {
    console.log('count changed');
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>count + 1</button>;
};
```
