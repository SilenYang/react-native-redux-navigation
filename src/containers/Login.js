import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import api from '../assets/js/api';

const STORAGE_KEY = '@AsyncStorage:usrMsg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '1',
            password: '1'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this._login.bind(this)}>
                    <Text style={styles.instructions}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _login() {
        this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
});

export default connect(state => ({}), dispatch => ({}))(Login);
