import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RootStackParamList, RouterName } from "../RouterName";
import ICON_BASE64 from "./ICON_BASE64";

type ImageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, RouterName.Image>
    route: RouteProp<RootStackParamList, RouterName.Image>
}

const Image_1: FC<ImageProps> = ({ route }) => {

    console.log('接收参数' + route.params.userId);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Text style={{ fontSize: 20 }}>require('./test_bg.jpg')</Text>
                    <Image style={{ width: 200, height: 200 }}
                        source={require('./test_bg.jpg')}
                    />
                    <Text style={{ fontSize: 20 }}>uri</Text>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/11609643?s=400&u=c35f421cfcd3d6caeb200acfcb64f3f7a54764f5&v=4',
                        }}
                    />
                    <Text style={{ fontSize: 20 }}>defaultSource ICON_BASE64</Text>
                    <Image
                        style={{ width: 80, height: 80 }}
                        defaultSource={{ uri: ICON_BASE64 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Image_1;