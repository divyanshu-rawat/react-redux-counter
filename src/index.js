import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {createStore} from 'redux';

import Counter from './Reducers/reducer_in_redux';
// import {createStore} from 'redux';

const store = createStore(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// Makes the Redux store available to the connect() calls in the component hierarchy below.
// Normally, you can’t use 
// connect() without wrapping a parent or ancestor component in <Provider>.
// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.


// export default connect(mapStateToProps)(App);
// registerServiceWorker();
