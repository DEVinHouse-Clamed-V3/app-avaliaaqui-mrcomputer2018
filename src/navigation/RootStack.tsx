import React from "react";
import Presentation from "../pages/Presentation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Presentation" 
                component={Presentation}
                options={{
                    header: () => <></>
                }} 
            />
        </Stack.Navigator>
    );
}