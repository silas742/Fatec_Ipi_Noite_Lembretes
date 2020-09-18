import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ItemLembrete = (props) => {
  return (
    //poderia ser: <TouchableOpacity onPress={() => props.onDelete(props.chave)} >
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.chave)}
      underlayColor="blue"
    >
      <View style={estilos.button}>
        <Text style={estilos.buttonText}>{props.lembrete}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    padding: 15,
    color: "#989788",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#444545",
  },
});

export default ItemLembrete;
