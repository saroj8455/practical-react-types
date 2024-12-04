import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import './index.css';
import App from './App.tsx';

const value = {
  ripple: true,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={value}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
