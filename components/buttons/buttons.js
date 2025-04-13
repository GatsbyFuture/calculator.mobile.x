import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ButtonsStyle from "./buttons.style";

import {ButtonsConfig} from "./buttons.config";

export default function Buttons() {
    const [value, setValue] = React.useState(0);
    return (
        <View style={ButtonsStyle.container}>
            {
                ButtonsConfig.SIMPLE_BUTTONS.map(button => {
                        console.log(button)
                        return <TouchableOpacity
                            style={ButtonsStyle.button}
                            onPress={() => console.log(button.value)}
                            disabled={false}
                        >
                            <Text style={ButtonsStyle.text}>{button.value}</Text>
                        </TouchableOpacity>
                    }
                )
            }
        </View>
    );
}