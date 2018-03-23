import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameBox}>{this.props.name}</Text>
                <TextInput
                    style={styles.valueBox}
                    placeholder={this.props.name}
                    placeholderTextColor={'#999'}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={this.props.name === 'passWord' ? true : false}
                    onChangeText={text => this.props.save(this.props.name, text)}
                    value={this.props.value}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 10
    },
    nameBox: {
        lineHeight: 40
    },
    valueBox: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width: 200
    }
});

export default connect(state => ({}), dispatch => ({}))(InputText);
