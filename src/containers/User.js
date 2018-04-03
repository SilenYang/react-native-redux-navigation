import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import utils from '../assets/js/utils';
import commonCss from '../assets/js/commonCss';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    login = () => {
        const scope = 'snsapi_userinfo';
        const state = 'wechat_sdk_demo';
    };

    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Header bgColor="rgb(146,194,248)" color="#fff" title="我的" />
                <Text>user</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        position: 'relative'
    },
    head: {
        position: 'relative',
        height: 187,
        marginBottom: 13,
        backgroundColor: '#fff'
    },
    avatarBox: {
        marginLeft: 40,
        marginTop: -77,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    level: {
        borderColor: '#6AA4FF',
        borderWidth: 1,
        width: 35,
        textAlign: 'center',
        color: '#6CA6FF',
        fontSize: 10,
        paddingVertical: 1,
        borderRadius: 8
    },
    name: {
        fontSize: 18,
        color: '#5b5b5b',
        width: 156,
        overflow: 'hidden',
        textAlign: 'center',
        lineHeight: 37
    },
    icon: {
        width: 10,
        height: 13
    },
    text: {
        fontSize: 13,
        color: '#444',
        marginLeft: 7
    },
    list: {
        flex: 1,
        height: 46,
        backgroundColor: '#fff'
    },
    listItem: {
        paddingLeft: 24,
        paddingRight: 18
    },
    listIcon: {
        width: 26,
        height: 26,
        marginRight: 12
    },
    listName: {
        flex: 1,
        height: 46,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee'
    }
});

export default connect(state => ({ user: state.user }), dispatch => ({}))(User);
