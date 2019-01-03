import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import LenovoSalesPage from './containers/LenovoSalesPage';

import './styles/styles.scss';

class App extends Component {
    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/lenovo-sales" component={LenovoSalesPage}/>
                        <Route component={LenovoSalesPage}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default hot(module)(App);