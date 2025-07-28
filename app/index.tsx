import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#490ff9ff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {
  const [corrente, setCorrente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [resultado, setResultado] = useState("");

  const calcBitola = () => {
    const correnteNum = Number(corrente);
    const distanciaNum = Number(distancia);

    const bitola110 = (2 * correnteNum * distanciaNum) / 294.64;
    const bitola220 = (2 * correnteNum * distanciaNum) / 510.4;

    setResultado(
      `Bitola recomendada para 110V: ${bitola110.toFixed(2)} mm²\nBitola recomendada para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };


  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Calculadora de Bitola</Text>
      <TextInput
        placeholder="Distância em Metros"
        style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
      />
      <TextInput
        placeholder="Corrente em Amperes"
        style={styles.input}
        value={corrente}
        onChangeText={setCorrente}
      />
      <Button
        title="Calcular"
        onPress={calcBitola}
      />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}
