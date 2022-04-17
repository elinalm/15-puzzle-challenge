import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import { PuzzleBoard } from './components/PuzzleBoard';
import reportWebVitals from './reportWebVitals';
import { ControlProvider } from './context/ControlContext';

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
