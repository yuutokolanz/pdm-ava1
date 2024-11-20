import { Image, Pressable, ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'

type ImageButtonProps = {
  source: ImageSourcePropType;
  onPress: () => void;
}

export default function ImageButton({ source, onPress }: ImageButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} style={styles.image} alt='Imagem de um DutyFree'/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
  }
});