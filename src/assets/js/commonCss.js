import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    autoFlexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    centerBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyIcon: {
        width: 8,
        height: 10
    }
});

export default styles;
