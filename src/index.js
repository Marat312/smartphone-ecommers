import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import  'mdbreact/dist/css/mdb.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/Reducer';
import thunk from 'redux-thunk';
import {Auth0Provider} from '@auth0/auth0-react'


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
   <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>

            <Provider store = { store }>
            <App />
         </Provider>
  </Auth0Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const initialState = {
   products: [],
   addedItems: JSON.parse(localStorage.getItem("cartProduct")) || [],
   total: JSON.parse(localStorage.getItem("cartProduct")).length || 0, 
 };