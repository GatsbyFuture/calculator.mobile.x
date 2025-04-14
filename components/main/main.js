import React, {Fragment, useState} from "react";
import {Text, View} from "react-native";
import MainStyle from "./main.style";

import Screen from "../screen/screen";
import Buttons from "../buttons/buttons";

export default function Main() {
    const [result, setResult] = useState(0);
    const [events, setEvents] = useState([0]);

    const handleButtonsUpdate = (new_value) => {
        const regex = /^\d*\.?\d*$/;
        if (regex.test(new_value)) {
            events.push(new_value);
            setResult(events.join(''));
        } else {
            switch (new_value) {
                case 'C':
                    setResult(0);
                    setEvents([0]);
                    break;
            }
        }
    }

    return (
        <View style={MainStyle.container}>
            <Screen value={result}/>
            <Buttons
                value={result}
                onUpdate={handleButtonsUpdate}/>
        </View>
    );
}