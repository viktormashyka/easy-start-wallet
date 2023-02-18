import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';

import { App } from 'components/App';

// import 'styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/my-digital-life/">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
