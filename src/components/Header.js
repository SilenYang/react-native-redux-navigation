import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import utils from '../assets/js/utils';

class Header extends PureComponent {
    constructor(props) {
        super(props);
    }

    static height = 44;

    static propTypes = {
        // 字体颜色
        color: PropTypes.string,
        // 背景色
        bgColor: PropTypes.string,
        //title,默认为空
        title: PropTypes.string,
        //是否显示左边的回退,默认true
        isLeft: PropTypes.bool,
        //left按钮点击回调,如果有回调就没有pop
        leftPress: PropTypes.func,
        //header里面的自定义内容,如果不想用默认的字的话可以自己传个element进来,
        headerCenter: PropTypes.element,
        //头部右边的控件
        headerRight: PropTypes.element
    };

    static defaultProps = {
        color: '#000',
        bgColor: '#fff',
        title: '',
        isLeft: false
    };

    leftPress = () => {
        let { props } = this;
        if (props.leftPress) {
            props.leftPress();
        } else {
            // $.navigation.goBack();
            props.navigation.goBack();
        }
    };

    render() {
        let { props } = this;
        return (
            <View style={{ width: 375, backgroundColor: props.bgColor }}>
                {utils.isIOS && <View style={{ height: utils.isIphoneX ? 44 : 20 }} />}
                <View style={[styles.header]}>
                    {props.headerCenter ? (
                        <View
                            style={[
                                styles.headerChildren,
                                !props.isLeft && !props.headerRight && { alignItems: 'center' }
                            ]}
                        >
                            {props.headerCenter}
                        </View>
                    ) : (
                        <View style={[styles.headerTextView]}>
                            <Text style={[styles.headerText, { color: props.color }]}>
                                {props.title}
                            </Text>
                        </View>
                    )}
                    {props.isLeft && (
                        <Button
                            isCustom={true}
                            customView={
                                <Text>〈</Text>
                                // <Icon
                                //     name="ios-arrow-back"
                                //     size={30}
                                //     color={props.color}
                                //     style={styles.leftReturn}
                                // />
                            }
                            onPress={this.leftPress}
                        />
                    )}
                    {props.headerRight && (
                        <View style={styles.rightStyle}>{props.headerRight}</View>
                    )}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: Header.height
    },
    headerTextView: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        height: Header.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    headerChildren: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        height: Header.height,
        justifyContent: 'center'
    },
    leftReturn: {
        // height: Header.height,
        position: 'absolute',
        left: 0,
        top: 7,
        paddingHorizontal: 19
    },
    leftImage: {
        height: 32 / 2,
        width: 20 / 2
    },
    rightStyle: {
        height: Header.height,
        position: 'absolute',
        right: 10,
        top: 0,
        justifyContent: 'center'
    },
    iconStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 28,
        width: 28
    }
});

export default connect(state => ({}), dispatch => ({}))(Header);
