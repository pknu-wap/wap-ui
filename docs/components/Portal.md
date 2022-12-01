# `[Component] Portal`

## `type`

```tsx
interface Portal {
  children: React.ReactNode;

  /**
   * @description DOM의 id 혹은 element를 지정합니다.
   * @default 'portal' - className으로 지정됨
   *
   */
  target?: HTMLElement | string;
}
```

## `example`

```tsx
<Portal>
  <Modal/>
</Portal>

<Portal target="modal">
  <Modal/>
</Portal>

<Portal target={document.getElementById('modal')}>
  <Modal/>
</Portal>
```
