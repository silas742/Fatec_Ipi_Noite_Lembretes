import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const LembreteInput = (props) => {
  const [lembrete, setLembrete] = useState("");

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  };
  return (
    <View style={estilos.lembreteView}>
      <TextInput
        placeholder="Lembrar..."
        style={estilos.lembreteTextInput}
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <Button
        title="inserir"
        onPress={() => {
          props.onAdicionarLembrete(lembrete);
          setLembrete("");
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  lembreteView: {
    marginBottom: 7,
  },
  lembreteTextInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    padding: 3,
    textAlign: "center",
    marginBottom: 4,
  },
});

export default LembreteInput;
