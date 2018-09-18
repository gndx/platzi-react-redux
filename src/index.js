import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import { getCharacters } from './actions/actionsTypes';

store.dispatch(getCharacters());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
