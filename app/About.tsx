import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/src/components/general/Header'
import Info from '@/src/components/About/Info'

import defaultStyles from '@/constants/defaultStyles'

export default function About() {
  return (
    <View>
      <Header></Header>

      <Text style={defaultStyles.appTitle}>SkyBreeze</Text>

      <Info></Info>
    </View>
  )
}

const styles = StyleSheet.create({


})