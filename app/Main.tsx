import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CountriesList from '@/src/components/Home/CountriesList'
import Header from '@/src/components/general/Header'

import defaultStyles from '@/constants/defaultStyles'

export default function Main() {
  return (
    <View>
      <Header></Header>

      <Text style={defaultStyles.appTitle}>SkyBreeze</Text>

      <View style={styles.listContainer}>
        <CountriesList></CountriesList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  }
})