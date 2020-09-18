import React from "react";
import { StyleSheet, View, Text } from "react-native";

function LembreteHeader() {
  return (
    <View>
      <Text style={estilos.texto}>Lembretes</Text>
    </View>
  );
}
const estilos = StyleSheet.create({
  texto: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: "4rem",
  },
});
export default LembreteHeader;
