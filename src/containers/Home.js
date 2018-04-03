import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../assets/js/api';
import commonCSS from '../assets/js/commonCss';
import user from '../actions/User';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top3gifts: []
        };
    }

    render() {
        const { user } = this.props;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'relative'
    }
});

export default connect(
    state => ({ user: state.user }),
    dispatch => ({
        updateUser: bindActionCreators(user.update, dispatch)
    })
)(Home);
