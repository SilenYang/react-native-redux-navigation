import React from 'react';
import  PropTypes  from 'prop-types';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    StyleSheet,
    View,
    Platform,
    ActivityIndicator,
    Text
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import utils from '../assets/js/utils';
import colors from './assets/Colors';


const log = () => {
    console.log('please attach method to this component'); //eslint-disable-line no-console
};

const Button = props => {
    const {
        style,
        disabled,
        loading,
        loadingRight,
        activityIndicatorStyle,
        buttonStyle,
        borderRadius,
        title,
        onPress,
        icon,
        backgroundColor,
        color,
        large,
        disabledStyle,
        display,
        isCustom,
        customView,
        animationType,
        activeOpacity,
        ...attributes,
    } = props;
    let {Component} = props;

    let iconElement;
    if (icon) {
        // iconElement = (
            // <Icon
            //     color={icon.color || 'white'}
            //     size={icon.size || (large ? 26 : 18)}
            //     style={[
            //         iconRight ? styles.iconRight : styles.icon,
            //         icon.style && icon.style
            //     ]}
            //     name={icon.name} />
        // );
    }
    let loadingElement;
    if(loading){
        loadingElement = (
            <ActivityIndicator
                animating={true}
                style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
                color={color || 'white'}
                size={large && 'large' || 'small'}
            />
        );
    }
    if (!Component && utils.isIOS) {
        Component = TouchableHighlight;
    }
    if (!Component && !utils.isIOS) {
        Component = TouchableNativeFeedback;
    }
    if (!Component) {
        Component = TouchableHighlight;
    }

    let customComponent;
    if (!isCustom){
        customComponent = (
            <View
                animation= {animationType}
                useNativeDriver
                style={[
                      styles.button,
                      backgroundColor && {backgroundColor: backgroundColor},
                      borderRadius && {borderRadius},
                      !large && styles.small,
                      buttonStyle && buttonStyle,
                      disabled && {backgroundColor: colors.disabled},
                      disabled && disabledStyle && disabledStyle
                    ]}
            >
                {
                    icon && !iconRight && iconElement
                }
                {
                    loading && !loadingRight && loadingElement
                }
                <Text
                    style={[
                    styles.text,
                    color && {color},
                    fontSize && {fontSize},
                    textStyle && textStyle,
                    fontWeight && {fontWeight},
                    fontFamily && {fontFamily}
                  ]}>
                    {title}
                </Text>
                {
                    loading && loadingRight && loadingElement
                }
                {
                    icon && iconRight && iconElement
                }
            </View>
        )
    }
    return (
        <Component
            onPress={onPress || log}
            disabled={disabled || false}
            style={[style,{display:'flex'}]}
            activeOpacity={activeOpacity}
            {...attributes}
        >
            {

                isCustom ? customView : customComponent

            }
        </Component>
    );
};

Button.propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    onPress: PropTypes.any,
    icon: PropTypes.object,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    buttonStyle: View.propTypes.style,
    activityIndicatorStyle: View.propTypes.style,
    loadingRight: PropTypes.bool,
    Component: PropTypes.any,
    borderRadius: PropTypes.number,
    large: PropTypes.bool,
    iconRight: PropTypes.bool,
    disabledStyle: View.propTypes.style,
    display:PropTypes.string,
    isCustom:PropTypes.bool,
    customView:PropTypes.object,
    animationType:PropTypes.string,
    activeOpacity:PropTypes.number,
};

const styles = StyleSheet.create({
    button: {
        padding: 19,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    icon: {
        marginRight: 10
    },
    iconRight: {
        marginLeft: 10
    },
    small: {
        padding: 12
    },
    smallFont: {
        fontSize: 14
    },
    activityIndicatorStyle: {
        marginHorizontal: 10,
        height: 0
    },
    raised: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: {height: 1, width: 1},
                shadowOpacity: 1,
                shadowRadius: 1
            },
            android: {
                elevation: 2
            }
        })
    }
});

export default Button;