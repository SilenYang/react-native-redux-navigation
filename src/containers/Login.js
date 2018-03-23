import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import InputText from '../components/InputText';

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

    componentWillMount() {
        AsyncStorage.getItem(STORAGE_KEY).then(user => {
            user = user ? JSON.parse(user) : {};
            // user.userName === '15198268331' && this.props.navigation.navigate('Index')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <InputText
                    name="userName"
                    value={this.state.userName}
                    save={this.saveProps.bind(this)}
                />
                <InputText
                    name="password"
                    value={this.state.password}
                    save={this.saveProps.bind(this)}
                />
                <TouchableOpacity style={styles.button} onPress={this._login.bind(this)}>
                    <Text style={styles.instructions}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

    saveProps(key, value) {
        this.setState({ [key]: value });
    }

    async _login() {
        this.props.navigation.navigate('Index');
        fetch(`https://facebook.github.io/react-native/movies.json`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson.movies);
            })
            .catch(error => {
                console.error(error);
            });
        // api.login(this.state.userName, this.state.password).then(res => {
        //     console.log(res);
        // });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 40,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 0,
        backgroundColor: '#fff'
    },
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

export default connect(state => ({}), dispatch => ({}))(Login);
