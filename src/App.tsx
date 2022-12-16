/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC, type PropsWithChildren } from 'react';
import {
  Alert,
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from "./RouterName";

const Section: React.FC<
  PropsWithChildren<{
    title: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
  }>
> = ({ children, title, onPress }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer} >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


type AppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, RouteName.Home>
  route: RouteProp<RootStackParamList, RouteName.Home>
}

const App: FC<AppProps> = ({ navigation }) => {

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
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Text" onPress={() => {
            Alert.alert('你点击了按钮！');
          }}>
            文本组件
          </Section>
          <Section title="Image" onPress={() => {
            // navigation.navigate(RouteName.Image, { userId: '123' })
          }}>
            图片组件
          </Section>

          <Section title="FastList">
            List
          </Section>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    // backgroundColor: '#f9c2ff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;
