import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import defaultStyles from '@/constants/defaultStyles'

export default function Info() {
  return (
    <View style={defaultStyles.container}>
      <View style={styles.infoContainer}>
        <Text>Version 1.0</Text>

        <Text>developed by</Text>
        <Text>Raul Ferreira da Rocha</Text>
        <Link href={"https://github.com/yuutokolanz"}>Link para o Github</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "cyan",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: 230,
    height: 180,
    padding: 8
  }
})