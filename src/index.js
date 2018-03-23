import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppWithNavigationState from './AppWithNavigationState';
import Home from './containers/Home';

// const store = createStore();
export default class ReactNativeReduxNavigation extends Component {
    render() {
        // return <Home />;
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('react_native_redux_navigation', () => ReactNativeReduxNavigation);
