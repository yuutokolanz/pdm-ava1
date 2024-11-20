import { View, Alert, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import ImageButton from './general/ImageButton';
import localimage from '../../assets/images/skybreezeLogo.png'

export default function Login() {
  const [text, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onPressLogin = () => {
    if (text === "fulano" && password === "123") {
      router.push({pathname: "/Main"})
    } else {
      Alert.alert("Usuário e/ou senha incorreto(s)", "A senha ou usuário está incorreto tente username: fulano   password: 123",[{
        text: "OK",
      }])
    }
  }

  return (
    <View style={styles.containerTeste}>
      <Image
        source={localimage}
        style={styles.image}
      />

      <TextInput
        style={styles.inputs}
        onChangeText={setUsername}
        value={text}
        placeholder="Username"
      />

      <TextInput
        style={styles.inputs}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />

      <ImageButton
        onPress={onPressLogin}
        source={{uri: "https://static.vecteezy.com/system/resources/previews/016/177/875/non_2x/login-buttons-sign-label-speech-login-vector.jpg"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: 200,
    borderRadius: 20
  },
  inputs: {
    backgroundColor: "#46dbf2",
    borderRadius: 18,
    width: "80%",
    textAlign: "center"
  },
  containerTeste: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%"
  }
})