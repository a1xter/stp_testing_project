import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App";
import StoreProvider from "./configuration/store";

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);