import { Image, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ICON_BASE64 from "./ICON_BASE64";

const Image_1 = () => {
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