import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0.4,
        backgroundColor: '#fff111',
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        marginBottom: 5,
    },
    calculator_type: {
        flex: 0.2,
        fontSize: 36,
        textAlign: 'center',
    },
    result: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    text: {
        fontFamily: 'ubuntu',
        fontSize: 64,
    }
})