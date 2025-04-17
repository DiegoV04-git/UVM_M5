import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <h1>Hola Mundo</h1>
        <p>Hola React</p>
    </React.StrictMode>
)

