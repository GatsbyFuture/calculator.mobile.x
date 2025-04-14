import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ButtonsStyle from "./buttons.style";

import {ButtonsConfig} from "./buttons.config";

export default function Buttons({value, onUpdate}) {
    // const [value, setValue] = React.useState(0);

    const handlePress = (event) => {
        console.log("event:", event);
        onUpdate(event);
    };

    return (
        <View style={ButtonsStyle.container}>
            {
                ButtonsConfig.SIMPLE_BUTTONS.map(button => {
                        return <TouchableOpacity
                            key={button.id}
                            style={ButtonsStyle.button}
                            onPress={() => handlePress(button.value)}
                        >
                            <Text style={ButtonsStyle.text}>{button.value}</Text>
                        </TouchableOpacity>
                    }
                )
            }
        </View>
    );
}