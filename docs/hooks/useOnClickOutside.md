# `[hook] useOnClickOutside`

## `description`

ref가 있는 Element의 밖을 click시 handler 작동한다.
대체제로 react-outside-click-handler 라이브러리가 있음

## `type`

```ts
interface Props {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
}
```

## `example`

```tsx
import { useRef } from 'react'
import { useOnClickOutside } from 'wap-ui'

const App = () => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => alert('You clicked outside of me!'));

  return (
    <div ref={ref}>Button</div>;
  )
}
```
