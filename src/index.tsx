import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { ControlProvider } from './context/ControlContext';
import { PuzzleBoard } from './components';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ControlProvider>
      <PuzzleBoard />
    </ControlProvider>
  </React.StrictMode>
);

reportWebVitals();
