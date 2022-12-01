# `[Layout] Spacer`

## `type`

```ts
x?: number;
y?: number;
```

## `example`

```tsx
import { Spacer } from 'wap-ui'
import { styled } from '@emotion/react'

const App = () => {
  return (
    <FlexRow>
      <FlexColumn>
        <Box />
        <Spacer x={2} />  // <- 칸을 띄워준다.
        <Box />
      </FlexColumn>
      <Spacer y={2}>      // <- 칸을 띄워준다.
      <FlexColumn>
        <Box />
        <Spacer x={2} />  // <- 칸을 띄워준다.
        <Box />
      </FlexColumn>
    </FlexRow>
  );
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  background: #f31260;
  width: 100px;
  height: 100px;
`;
```
