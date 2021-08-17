import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './Redux/Reducers'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
