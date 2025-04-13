import React, {Fragment} from "react";
import {Text, View} from "react-native";
import MainStyle from "./main.style";

import Screen from "../screen/screen";
import Buttons from "../buttons/buttons";

export default function Main() {
    return (
        <View style={MainStyle.container}>
            <Screen/>
            <Buttons/>
        </View>
    );
}