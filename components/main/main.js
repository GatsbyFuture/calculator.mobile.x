import React, {Fragment, useState} from "react";
import {Text, View} from "react-native";
import MainStyle from "./main.style";

import Screen from "../screen/screen";
import Buttons from "../buttons/buttons";

export default function Main() {
    const [result, setResult] = useState(0);
    const [events, setEvents] = useState([0]);

    const calculate = (events) => {
        let {operations, numbers} = events.reduce((acc, event) => {

        }, {operations, numbers});
    }

    const handleButtonsUpdate = (new_value) => {
        const regex = /^(\d*\.?\d*$|[+\-*/])$/;
        if (regex.test(new_value)) {
            if (new_value === "." && events.includes(new_value)) return;
            if (!events[0] && events.length === 1 && new_value !== ".") {
                if (new_value === "0") return;

                events[0] = new_value;
                setResult(new_value);
            } else {
                if (events.length <= 9) {
                    events.push(new_value);
                }
                setResult(events.join(''));
            }
        } else {
            switch (new_value) {
                case 'C':
                    setResult(0);
                    setEvents([0]);
                    break;
                case "<":
                    events.pop();
                    if (events.length === 0) {
                        setResult(0);
                        events.push(0);
                    } else {
                        setResult(events.join(''));
                    }
                    break;
                case "=":
                // calculate all operation by priority...
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