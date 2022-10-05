import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

import Servicos from "./screens/servicos";
import Carrinho from "./screens/carrinho";

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: cores.roxo,
                        inactiveTintColor: cores.claro,
                        inactiveBackgroundColor: cores.laranja,
                        activeBackgroundColor: cores.roxo,
                        style:{
                            height: 70,
                        },
                        labelStyle: {
                            width: "100%",
                            flex: 1,
                            fontWeight: "bold",
                            fontSize: 16,
                            lineHeight: 21,
                            marginTop: 3,
                            paddingTop: 21,
                            backgroundColor: cores.laranja,
                        },
                        keyboardHidesTabBar: true,
                    }}
                >
                    <Tab.Screen name="Servicos" component={Servicos} />
                    <Tab.Screen name="Carrinho" component={Carrinho} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Routes