import React from "react";
import Presentation from "../pages/Presentation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../pages/Products";

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

            <Stack.Screen 
                name="Lista de Produtos" 
                component={Products}
                options={{
                    title: "Produtos",
                    headerStyle: {
                        backgroundColor: '#333'
                    },
                    headerTintColor: '#FFF',
                }}
            />
        </Stack.Navigator>
    );
}