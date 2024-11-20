import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { useActionSheet } from '@expo/react-native-action-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/native';

export default function Header() {
  const { showActionSheetWithOptions } = useActionSheet();
  const currentRoute = useNavigationState(state => state.routes[state.index].name);

  const onPressHambMenu = () => {
    const options = currentRoute === "Main" ? ["Sobre", "Logout", "Cancel"] : ["Home", "Logout", "Cancel"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex, 
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0:
          if (currentRoute === "Main") {
            router.navigate("/About");
          } else {
            router.navigate("/Main");
          }
          break;
        case 1:
          router.dismissAll();
          break;
        default:
          break;
      }});

  }

  return (
    <View style={styles.headerContainer}>
      <Text>SkyBreeze</Text>

      <Pressable onPress={onPressHambMenu}>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  }
})