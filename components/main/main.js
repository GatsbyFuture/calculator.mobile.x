import React, {Fragment, useState} from "react";
import {Text, View} from "react-native";
import MainStyle from "./main.style";

import Screen from "../screen/screen";
import Buttons from "../buttons/buttons";
import {Operations} from "../buttons/buttons.enum";

export default function Main() {
    const [result, setResult] = useState("0");
    const [events, setEvents] = useState(["0"]);

    const regex_num = /^\d*\.?\d*$/;
    const regex_ope = /^[+\-*/]$/;
    const Operations = ["+", "-", "*", "/"];

    const operation = (first, second, oper) => {
        switch (oper) {
            case "+":
                return first + second;
            case "-":
                return first - second;
            case "*":
                return first * second;
            case "/":
                return second !== 0 ? first / second : "Error";
            default:
                return first;
        }
    };

    const calculate = (arr) => {
        let values = [];
        let operators = [];

        const precedence = {
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 2,
        };

        for (let i = 0; i < arr.length; i++) {
            if (regex_num.test(arr[i])) {
                values.push(parseFloat(arr[i]));
            } else if (regex_ope.test(arr[i])) {
                while (
                    operators.length > 0 &&
                    precedence[operators[operators.length - 1]] >= precedence[arr[i]]
                    ) {
                    const op = operators.pop();
                    const b = values.pop();
                    const a = values.pop();
                    values.push(operation(a, b, op));
                }
                operators.push(arr[i]);
            }
        }

        while (operators.length > 0) {
            const op = operators.pop();
            const b = values.pop();
            const a = values.pop();
            values.push(operation(a, b, op));
        }

        return values[0].toString();
    };

    const handleButtonsUpdate = (new_value) => {
        let newEvents = [...events];

        if (regex_num.test(new_value)) {
            if (new_value === "." && newEvents[newEvents.length - 1].includes(".")) return;
            if (newEvents[0] === "0" && newEvents.length === 1 && new_value !== ".") {
                if (new_value === "0") return;
                newEvents[0] = new_value;
            } else if (newEvents.length <= 9) {
                if (regex_ope.test(newEvents[newEvents.length - 1])) {
                    newEvents.push(new_value);
                } else {
                    newEvents[newEvents.length - 1] = newEvents[newEvents.length - 1] + new_value;
                }
            }
        } else if (regex_ope.test(new_value)) {
            if (Operations.includes(newEvents[newEvents.length - 1])) {
                newEvents[newEvents.length - 1] = new_value;
            } else if (newEvents[0] !== "0" || newEvents.length > 1) {
                newEvents.push(new_value);
            }
        } else {
            switch (new_value) {
                case "C":
                    newEvents = ["0"];
                    setResult("0");
                    break;
                case "<":
                    if (newEvents.length === 1) {
                        newEvents = ["0"];
                    } else {
                        newEvents.pop();
                    }
                    break;
                case "=":
                    const calcResult = calculate(newEvents);
                    newEvents = [calcResult];
                    setResult(calcResult);
                    break;
                default:
                    break;
            }
        }

        setEvents(newEvents);
        setResult(newEvents.join(""));
        console.log("events: ", newEvents);
    };

    return (
        <View style={MainStyle.container}>
            <Screen value={result}/>
            <Buttons
                value={result}
                onUpdate={handleButtonsUpdate}/>
        </View>
    );
}