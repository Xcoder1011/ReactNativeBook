import React, { lazy, Suspense } from "react";
import { Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { RootStackParamList, RouterName } from "./RouterName";
const Stack = createNativeStackNavigator<RootStackParamList>();

import App from "./App";
const Image_1 = lazy(() => import('./02_image/image_1'));
const Main = lazy(() => import('./05_Navigation/component/Main'));
const Foo = lazy(() => import('./05_Navigation/component/Foo'));
const Bar = lazy(() => import('./05_Navigation/component/Bar'));

export default function Router() {
    return (
        <Suspense fallback={<Text>Loading...</Text>}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={RouterName.Home}>
                    <Stack.Screen name={RouterName.Home} component={App} />
                    <Stack.Screen name={RouterName.Image} component={Image_1} />
                    <Stack.Screen name={RouterName.Main} component={Main} />
                    <Stack.Screen name={RouterName.Foo} component={Foo} />
                    <Stack.Screen name={RouterName.Bar} component={Bar} />
                </Stack.Navigator>
            </NavigationContainer>
        </Suspense>
    );
}
