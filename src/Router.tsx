import React, { lazy, Suspense } from "react";
import { Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Image_1 from './02_image/image_1';
import App from "./App";
import { RootStackParamList, RouteName } from "./RouterName";
import Main from "./05_Navigation/component/Main";
// import Foo from "./05_Navigation/component/Foo";
// import Bar from "./05_Navigation/component/Bar";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Foo = lazy(() => import('./05_Navigation/component/Foo'));
const Bar = lazy(() => import('./05_Navigation/component/Bar'));

export default function Router() {
    return (
        <Suspense fallback={<Text>Loading...</Text>}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={RouteName.Home}>
                    <Stack.Screen name={RouteName.Home} component={App} />
                    {/* <Stack.Screen name={RouteName.Image} component={Image_1} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </Suspense>
    );
}
