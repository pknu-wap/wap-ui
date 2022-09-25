import { Global, css } from '@emotion/react';
import React from 'react';
import reset from './reset';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
        * {
          box-sizing: border-box;
        }
        input {
          outline: none;
          border: none;
        }
        button {
          border: none;
          outline: none;
          background: none;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      `}
    />
  );
};

export default GlobalStyle;
