import ReactDOM from 'react-dom/client';
import { WapUIProvider } from 'wap-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WapUIProvider>
    <App />
  </WapUIProvider>,
);
