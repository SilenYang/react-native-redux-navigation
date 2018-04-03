import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import utils from '../assets/js/utils';
import api from '../assets/js/api';
import commonCss from '../assets/js/commonCss';
import Header from '../components/Header';

class Gifts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            loading: false,
            listCplt: false,
            gifts: [],
            banners: []
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData = page => {};

    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Header title="能量兑换" />
                <View style={styles.header}>
                    <Text>Gift</Text>
                </View>
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
    header: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default connect(state => ({ user: state.user }), dispatch => ({}))(Gifts);
