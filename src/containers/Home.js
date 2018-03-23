import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/index_main.png')}
                    style={[{ width: 750, height: 580 }]}
                />
                {/* <EnergyBox /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default connect(state => ({}), dispatch => ({}))(Home);
