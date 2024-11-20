import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

import data from '@/src/services/data-passengers'
import convertData from '@/src/helpers/convertData'

export default function CountriesList() {
  return (
    <View style={styles.teste}>
      <SectionList
        style={styles.list}
        stickySectionHeadersEnabled={true}
        sections={convertData(data)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.id}</Text>
            <Text style={styles.itemText}>{item.passenger_name}</Text>
          </View>
        )}
        renderSectionHeader={({section}) =>(
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.country}, {section.passengerCount} passageiros</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  teste: {
    width: "90%",
    height: "85%"
  },
  list: {
    backgroundColor: "#46dbf2",
    borderRadius: 20
  },
  item: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemText: {
    fontSize: 16
  },
  header: {
    padding: 5,
    backgroundColor: "grey"
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
})