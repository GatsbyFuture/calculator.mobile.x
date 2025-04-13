import React from 'react';
import {Text, View} from 'react-native';
import ScreenStyle from "./screen.style";

export default function Screen() {
    const [value, setValue] = React.useState(0);

    return (
        <View style={ScreenStyle.container}>
            <Text style={ScreenStyle.calculator_type}> SIMPLE CALCULATOR</Text>
            <View style={ScreenStyle.result}>
                <Text style={ScreenStyle.text}>{value}</Text>
            </View>
        </View>
    );
}