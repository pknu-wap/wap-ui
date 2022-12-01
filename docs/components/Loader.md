# `[Component] Loader`

## `type`

```tsx
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * @default 'primary'
   */
  color?: NormalColorType;
  /**
   * @default 'spinner'
   */
  type?: 'spinner' | 'bars' | 'dots';
```

## `example`

```tsx
const App = () => {
  return (
    <>
      <Loader />
      <Loader type="spinner" size="sm" />
      <Loader type="bars" color="secondary" />
      <Loader type="dots" />
    </>
  );
};
```
