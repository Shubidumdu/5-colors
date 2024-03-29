import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ReduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, applyMiddleware(ReduxThunk))
    : createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
serviceWorker.register();
