import React from 'react';
import {Text, View} from 'react-native';
import ButtonsStyle from "./buttons.style";

export default function Buttons() {
    const [value, setValue] = React.useState(0);

    return (
        <View style={ButtonsStyle.container}>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>C</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>%</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>+/-</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>/</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>7</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>8</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>9</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>*</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>4</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>5</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>6</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>-</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>1</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>2</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>3</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>+</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>.</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>0</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>{"<"}</Text>
            </View>
            <View style={ButtonsStyle.button}>
                <Text style={ButtonsStyle.text}>=</Text>
            </View>
        </View>
    );
}