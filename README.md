<div align="center"><img src="https://user-images.githubusercontent.com/75781414/192261497-b3e4b288-d1c5-4d27-a062-da65a876ecfb.png" width="220" height="240">
</div>

# <div align="center">&lt;Awesome React UI Library /&gt;</div>

<p align="center">
  <a href="https://github.com/pknu-wap/wap-ui/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/pknu-wap/wap-ui">
  </a>
  <a href="https://www.npmjs.com/package/@wap-ui/react">
    <img src="https://img.shields.io/npm/dm/@wap-ui/react.svg?style=flat-round" alt="npm downloads">
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

<table align="center" width="100%">
  <tr align="center">
    <td colspan="2">
      <a href="https://wap-ui.vercel.app/?path=/story/components-button--default">Try using it in playground</a>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/75781414/209572114-dfa9b08a-052b-446e-afd5-388545d09c6b.gif"  />
    </td>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/75781414/209572876-2720e0ef-94bb-441d-b24e-b282fefc683d.gif" />
    </td>
  </tr>
  </tr>
</table>

## `Installing WAP-UI`

To use WAP UI, Install the `@wap-ui/react` package and its peer dependencies.
(`@emotion/react`, `@emotion/styled`, `framer-motion`)

```sh
yarn add @wap-ui/react @emotion/react @emotion/styled framer-motion
# or
npm i @wap-ui/react @emotion/react @emotion/styled framer-motion
```

## `Usage`

To start using the components, follow these steps:

1. For WAP UI to work correctly, Wrap `WapUIProvider` provided by `@wap-ui/react` at root of your application.

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

2. Bring components what you want and use them.

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

3. You can refer to the components through Documents or Jsdocs like that.
<table align="center">
  <tr>
    <td align="center">
      Documents
    </td>
    <td align="center">
      Jsdocs
    </td>
  </tr>
  <tr>
    <td align="center" >
      <img src="https://user-images.githubusercontent.com/75781414/209562964-ae0b74b4-c604-4ac7-94d6-b5f0a3cb4a02.png" width="100%" />
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/75781414/209560523-74cb3b4e-f1e9-4a5d-a5e1-ae54c2aa4150.png" width="100%" />
    </td>
  </tr>  
</table>

## `Contributors`

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/neko113">
        <img src="https://avatars.githubusercontent.com/u/75781414?v=4" width="120px;"/>
        <br />
        <a href="https://github.com/pknu-wap/wap-ui/commits/main?author=neko113" title="Code">neko113 💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/sjyoung428">
        <img src="https://avatars.githubusercontent.com/u/77968955?v=4" width="120px;"/>
        <br />
        <a href="https://github.com/pknu-wap/wap-ui/commits/main?author=sjyoung428" title="Code">sjyoung428 💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/mimpie">
        <img src="https://avatars.githubusercontent.com/u/108365477?v=4" width="120px;"/>
        <br />
        <a href="https://github.com/pknu-wap/wap-ui/commits/main?author=mimpie" title="Code">mimpie 💻</a>
    </td>
  </tr>
  <tr>
    <td align="center">컴공19 김민수</td>
    <td align="center">컴공16 성준영</td>
    <td align="center">컴공21 이예슬</td>
  </tr>
</table>

## `Links`

- #### [Documents](https://github.com/pknu-wap/wap-ui/tree/main/docs)
- #### [NPM](https://www.npmjs.com/package/@wap-ui/react)
- #### [Playground](https://wap-ui.vercel.app/)
- #### [Presentations](https://github.com/pknu-wap/wap-ui/tree/main/ppt)
- #### [Example](https://github.com/pknu-wap/wap-ui/tree/main/example)
