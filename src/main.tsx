import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';

const rootElem = document.getElementById('root');

if (!rootElem) throw new Error('Root Element Not Found');

createRoot(rootElem).render(
  <StrictMode>
    <App />
  </StrictMode>
);
