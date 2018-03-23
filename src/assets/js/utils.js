import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Routers from '../../routers';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const utils = {
    isIOS: Platform.OS === 'ios',
    isIphoneX:
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
            (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT)),
    getKeyByRouterName(routers, routerName) {
        let stack = [...routers];
        let current = stack[0];
        while (current.routeName !== routerName && stack.length) {
            if (current.hasOwnProperty('routes') && current.routes.length)
                current.routes.forEach(item => stack.push(item));
            stack.shift();
            stack.length && (current = stack[0]);
        }
        console.log(current);
        return current.hasOwnProperty('routes')
            ? current.routes[current.routes.length - 1].key
            : current.key;
    },
    goBack: routeName => {
        const action = NavigationActions.reset({
            index: index - 2,
            actions: [NavigationActions.navigate({ routeName })]
        });
        console.dir(Routers.router.getPathAndParamsForState);
    }
};

export default utils;
