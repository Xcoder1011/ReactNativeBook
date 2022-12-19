import React, { FC } from 'react'
import { StyleSheet, ScrollView, View, Button } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'
import { RootStackParamList, RouterName } from '../../../RouterName'

type MainProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, RouterName.Main>
  route: RouteProp<RootStackParamList, RouterName.Main>
}

const Main: FC<MainProps> = ({ navigation }) => {
  const handleFoo = () => navigation.navigate(RouterName.Foo)
  const handleBar = () => navigation.navigate(RouterName.Bar, { userId: '123' })

  return (
    <ScrollView>
      <View style={styles.View}>
        <Button onPress={handleFoo} title="跳转到 Foo" color="green" />
        <Button onPress={handleBar} title="跳转到 Bar" color="green" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
})

export default Main
