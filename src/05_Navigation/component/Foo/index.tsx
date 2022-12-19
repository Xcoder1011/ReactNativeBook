import React, { FC } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'
import { RootStackParamList, RouterName } from '../../../RouterName'

type FooProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, RouterName.Foo>
  route: RouteProp<RootStackParamList, RouterName.Foo>
}

const Foo: FC<FooProps> = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.View}>
        <Text style={styles.Text}>Foo 页面</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'blue',
  },
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'blue',
    fontSize: 40,
  },
})

export default Foo
