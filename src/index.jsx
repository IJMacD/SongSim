import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Containers/App';

import 'material-components-web/dist/material-components-web.min.css';
import './style.css';

// @ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
