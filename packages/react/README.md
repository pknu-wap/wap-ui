<div align="center"><img src="https://user-images.githubusercontent.com/75781414/192261497-b3e4b288-d1c5-4d27-a062-da65a876ecfb.png" width="220" height="240">
</div>

# <div align="center">&lt;Awesome React UI Library /&gt;</div>

<p align="center">
  <a href="https://github.com/pknu-wap/wap-ui/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/pknu-wap/wap-ui">
  </a>
  <a href="https://www.npmjs.com/package/@wap-ui/react">
    <img src="https://img.shields.io/npm/dm/wap-ui.svg?style=flat-round" alt="npm downloads">
  </a>
  <img alt="Github Stars" src="https://badgen.net/github/stars/pknu-wap/wap-ui" />
  <img src="https://badgen.net/github/release/pknu-wap/wap-ui">

</p>
<p align="center">
  <img src="https://badgen.net/github/issues/pknu-wap/wap-ui">
  <img src="https://badgen.net/github/prs/pknu-wap/wap-ui">
  <img src="https://badgen.net/github/contributors/pknu-wap/wap-ui">
</p>

## `Demo`

<table align="center">
  <tr align="center">
    <td colspan="2">
      <a href="https://wap-ui.vercel.app/?path=/story/components-button--default">Demo Test</a>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/75781414/208494136-402c2f72-c2ed-422b-8569-4a8e6d7d2a6c.gif" width=380 />
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/75781414/208494143-7b6160eb-69ca-4b3a-aa96-8945ac424df4.gif" width=380 />
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/75781414/208494160-27c10e7a-665a-43c0-b76b-9efc4732d74b.gif" width=380 />
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/75781414/208494166-1c2a715e-201b-4fbe-bdbe-f2309e9f0aab.gif" width=380 />
    </td>
  </tr>
</table>

## `Installing WAP-UI`

```sh
yarn add @wap-ui/react @emotion/react @emotion/styled framer-motion
# or
npm i @wap-ui/react @emotion/react @emotion/styled framer-motion
```

## `Usage`

```tsx
import React from 'react';

// 1. import `WapUIProvider` component
import ReactDOM from 'react-dom/client';
import App from './App';
import { WapUIProvider } from '@wap-ui/react';

// 2. Wrap WapUIProvider at the root of your app
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WapUIProvider>
    <App />
  </WapUIProvider>,
);
```

```tsx
import { Button } from '@wap-ui/react';

const Home = () => {
  return (
    <Button size="md" color="success" shadow>
      버튼
    </Button>
  );
};

export default Home;
```

## `Contributors`

### [성준영](https://github.com/sjyoung428)<span style="font-size:50%">(소프트웨어·인공지능전공 16학번)</small>

### [이예슬](https://github.com/mimpie)<span style="font-size:50%">(소프트웨어·인공지능전공 21학번)</small>

### [김민수](https://github.com/neko113)<span style="font-size:50%">(컴퓨터공학전공 19학번)</small>

## `Links`

### [Docs](https://github.com/pknu-wap/wap-ui/tree/main/docs) / [NPM](https://www.npmjs.com/package/wap-ui) / [Storybook](https://wap-ui.vercel.app/) / [PPT](https://github.com/pknu-wap/wap-ui/tree/main/ppt) / [Example](https://github.com/pknu-wap/wap-ui/tree/main/example)
