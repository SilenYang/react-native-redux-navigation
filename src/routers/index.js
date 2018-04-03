import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Image, StyleSheet, Text, Platform, Dimensions, View } from 'react-native';

import init from '../assets/js/init';
import utils from '../assets/js/utils';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Gifts from '../containers/Gifts';
import Users from '../containers/User';

// icon
const iconSize = 25;
const home = require('../assets/images/home_icon.png');
const home_s = require('../assets/images/home_selec_icon.png');
const gift = require('../assets/images/energy_icon.png');
const gift_s = require('../assets/images/energy_selec_icon.png');
const user = require('../assets/images/user_center_icon.png');
const user_s = require('../assets/images/user_center_selec_icon.png');

const StackHeaderOptions = {
    headerStyle: { backgroundColor: '#6EA6FD' },
    headerTitleStyle: { color: '#fff', alignSelf: 'center' },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerRight: <View style={{ width: 24 }} />
};

const TabHeaderOptions = (tabBarTitle, normalImage, selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = ({ tintColor, focused }) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{ height: iconSize, width: iconSize }, { tintColor: tintColor }]}
            />
        );
    };
    const headerTitleStyle = {
        fontSize: utils.isIOS ? 20 : 23,
        // color: '#6EA6FD',
        alignSelf: 'center',
        paddingTop: !utils.isIOS ? 17 : null
    };

    return { tabBarLabel, tabBarIcon, headerTitleStyle };
};

/**
 * 路由配置中心
 */
const MainNav = TabNavigator(
    {
        Gifts: {
            screen: Gifts,
            navigationOptions: {
                headerTitle: 'Gifts',
                ...TabHeaderOptions('能量兑换', gift, gift_s)
            }
        },
        Index: {
            screen: Home,
            navigationOptions: { headerTitle: 'Home', ...TabHeaderOptions('首页', home, home_s) }
        },
        Users: {
            screen: Users,
            navigationOptions: { headerTitle: 'Users', ...TabHeaderOptions('我的', user, user_s) }
        }
    },
    {
        initialRouteName: 'Users',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        backBehavior: 'none',
        showLabel: true,
        lazy: utils.isIOS ? true : false,
        tabBarOptions: {
            // tabbar上label的style
            labelStyle: {
                marginTop: 0
            },
            // tabbar的Iconstyle
            iconStyle: {
                height: iconSize,
                width: iconSize,
                margin: 0
            },
            // tabbar的style
            style: {
                height: 49,
                backgroundColor: 'white'
            },
            // label和icon的背景色 活跃状态下
            activeBackgroundColor: 'white',
            // label和icon的前景色 活跃状态下（选中）
            activeTintColor: '#6EA6FD',
            // label和icon的背景色 不活跃状态下
            inactiveBackgroundColor: 'white',
            // label和icon的前景色 不活跃状态下(未选中)
            inactiveTintColor: '#474747',
            showIcon: true,
            // 是否显示label，默认为true
            showLabel: utils.isIO ? false : true,
            // 不透明度为按选项卡(iOS和Android < 5.0)
            pressOpacity: 0.3,

            indicatorStyle: {
                height: 0 // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
            }
        }
    }
);

const Main = StackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { headerTitle: 'Login', ...StackHeaderOptions }
        },
        Home: {
            screen: MainNav,
            navigationOptions: { headerTitle: 'Home', header: null, ...StackHeaderOptions }
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
            transitionSpec: {
                duration: 250
            }
        }),
        navigationOptions: nav => {
            init();
            $.navigation = nav.navigation;
        }
    }
);

export default Main;
