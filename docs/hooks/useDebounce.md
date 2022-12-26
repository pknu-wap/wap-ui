# `[Hook] useDebounce`

## `description`

useDebounce hook은 delay 안에 값 변경 시 값을 유지한다.
delay 안에 함수가 한번더 실행되면 앞의 작업을 취소하고 delay이
지날 때까지 다시 호출 되지 않으면 callback을 실행하는 형식으로 되어있다.

## `type`

```ts
interface Props<T> {
  value: T;
  delay?: number;
}
```

## `example`

```tsx
import { useState } from 'react';
import { useDebounce, TextInput } from '@wap-ui/react';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedText = useDebounce<string>({ value: searchText });

  return (
    <TextInput
      placeholder="Search"
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
```
