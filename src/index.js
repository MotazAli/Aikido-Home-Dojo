import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware , combineReducers } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import './lib/bootstrap/css/bootstrap.min.css';
import './lib/font-awesome/css/font-awesome.min.css';
import './lib/animate/animate.min.css';
import './lib/venobox/venobox.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import App from './App';
import reducer from './store/reducers';
import authReducer from './store/auth_store/reducer';

const rootReducer = combineReducers({main : reducer , auth: authReducer });
export const store = createStore(rootReducer,applyMiddleware(thunk));



ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>

  ,
  document.getElementById('root')
);

