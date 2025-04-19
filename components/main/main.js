import React, {Fragment, useState} from "react";
import {Text, View} from "react-native";
import MainStyle from "./main.style";

import Screen from "../screen/screen";
import Buttons from "../buttons/buttons";
import {Operations} from "../buttons/buttons.enum";

export default function Main() {
    const [result, setResult] = useState(0);
    const [events, setEvents] = useState([0]);

    const regex_num = /^\d*\.?\d*$/;
    const regex_ope = /^[+\-*/]$/;

    const operation = (first, second, oper) => {
        console.log("operators: ", first, second, oper);
        switch (oper) {
            case "+":
                first += second;
                break;
            case "-":
                first -= second;
                break;
            case "*":
                first *= second;
                break;
            case "/":
                first /= second;
                break;
            default:
                break;
        }

        return first;
    }

    const calculate = (events) => {
        return events.reduce((acc, event) => {
            if (event.includes(Operations[0])) {
                let index = events.indexOf(Operations[0]);
                const result = operation(+events[index - 1], +events[index + 1], event);
                console.log("x: ", result);
                events = [...events.slice(0, index - 1), result, events.slice(index + 2)];
            }
            return events;
        });
    }

    const handleButtonsUpdate = (new_value) => {
        if (regex_num.test(new_value)) {
            if (new_value === "." && events.includes(new_value)) return;
            if (!events[0] && events.length === 1 && new_value !== ".") {
                if (new_value === "0") return;

                events[0] = new_value;
                setResult(new_value);
            } else if (events.length <= 9) {
                events.push(new_value);
                setResult(events.join(''));
            }
        } else if (regex_ope.test(new_value)) {
            if (Operations.includes(events[events.length - 1])) {
                events[events.length - 1] = new_value;
                setResult(events.join(''));
            } else if (events[0]) {
                events.push(new_value);
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
                    setResult(calculate(events).join(''));
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