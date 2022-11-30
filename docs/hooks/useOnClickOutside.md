# `[hook] useOnClickOutside`

## `description`

ref가 있는 Element의 밖을 click시 handler 작동한다.
대체제로 react-outside-click-handler 라이브러리가 있음

## `example`

```tsx
const ref = useRef(null);

useOnClickOutside(ref, () => alert('You clicked outside of me!'));

<div ref={ref}>Button</div>;
```
