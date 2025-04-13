import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0.6,
        backgroundColor: '#fff111',
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    button: {
        width: "24%",
        height: "18.8%",
        borderWidth: 1,
        borderColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    text: {
        fontFamily: 'ubuntu',
        fontSize: 48,
    }
})