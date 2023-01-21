import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import filteredPokemonsReducer from './reducers/filteredPokemonsReducer';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const store = createStore(filteredPokemonsReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);