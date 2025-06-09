import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // sudah disediakan oleh CRA

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Aktifkan PWA
serviceWorkerRegistration.register();
