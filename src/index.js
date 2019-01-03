import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

render(
    <AppContainer>
        <App store={store} history={history}/>
    </AppContainer>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;

        render(
            <AppContainer>
                <NewApp store={store} history={history}/>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}