import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/couter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

const rootReducers = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducers);


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
