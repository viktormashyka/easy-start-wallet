import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/easy-start-wallet">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
