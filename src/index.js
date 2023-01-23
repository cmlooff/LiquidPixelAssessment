import React from 'react';
import { createRoot } from 'react-dom/client'; // React DOM Library allows us to interact with the DOM on the browser

import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
