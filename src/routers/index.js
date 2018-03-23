import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Image, StyleSheet, Text, Platform, Dimensions, View } from 'react-native';

import init from '../assets/js/init';
import utils from '../assets/js/utils';

import Login from '../containers/Login';
import Home from '../containers/Home';

const StackHeaderOptions = {
    headerStyle: { backgroundColor: '#d21f1f' },
    headerTitleStyle: { color: '#fff', alignSelf: 'center' },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerRight: <View style={{ width: 24 }} />
};

const TabHeaderOptions = tabBarTitle => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = ({ tintColor, focused }) => {
        return (
            // <Image
            //     source={!focused ? normalImage : selectedImage}
            //     style={[{height:35,width:35 }, {tintColor: tintColor}]}
            // />
            <Text>{!focused ? '🐱' : '🐶'}</Text>
        );
    };
    const headerTitleStyle = {
        fontSize: utils.isIOS ? 20 : 23,
        color: '#d21f1f',
        alignSelf: 'center',
        paddingTop: !utils.isIOS ? 17 : null
    };

    return { tabBarLabel, tabBarIcon, headerTitleStyle };
};

/**
 * 路由配置中心
 */
/**
 const MainNav = TabNavigator(
    {
        Search: {
            screen: Search,
            navigationOptions: { headerTitle: '搜索', ...TabHeaderOptions('搜索') }
        },
        Follow: {
            screen: Routers,
            navigationOptions: { headerTitle: '关注', ...TabHeaderOptions('关注') }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        backBehavior: 'none',
        lazy: utils.isIOS ? true : false,
        tabBarOptions: {
            // tabbar上label的style
            labelStyle: {
                // marginTop:0
            },
            // tabbar的Iconstyle
            iconStyle: {
                height: 35,
                width: 35,
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
            activeTintColor: '#d21f1f',
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
*/

const Main = StackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { headerTitle: 'Login', ...StackHeaderOptions }
        },
        Index: {
            screen: Home,
            navigationOptions: { headerTitle: 'Home', header: null, ...StackHeaderOptions }
        }
    },
    {
        initialRouteName: 'Login',
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
