<div align="center"><img src="https://user-images.githubusercontent.com/75781414/192261497-b3e4b288-d1c5-4d27-a062-da65a876ecfb.png" width="220" height="240">
</div>

# <div align="center">🌊 Awesome React Component Library 💦</div>

## `Installing WAP-UI`

```sh
yarn add wap-ui @emotion/react @emotion/styled framer-motion
# or
npm i wap-ui @emotion/react @emotion/styled framer-motion
```

## `Usage`

```jsx
import React from 'react';

// 1. import `WapUIProvider` component
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // 2. Wrap WapUIProvider at the root of your app
  return (
    <WapUIProvider>
      <WriteYourCode />
    </WapUIProvider>
  );
}
```

```jsx
import React from 'react';
import { Button } from 'wap-ui';

const App = () => {
  return (
    <Button size="md" color="success" shadow>
      버튼
    </Button>
  );
};

export default App;
```

## `Contributors`

### [성준영](https://github.com/sjyoung428)<span style="font-size:50%">(소프트웨어·인공지능전공 16학번)</small>

### [김민수](https://github.com/neko113)<span style="font-size:50%">(컴퓨터공학전공 19학번)</small>

### [이예슬](https://github.com/mimpie)<span style="font-size:50%">(소프트웨어·인공지능전공 21학번)</small>
