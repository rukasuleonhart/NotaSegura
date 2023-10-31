//Aluno: Lucas de Oliveira Santos Soares 
//Matricula #2120542

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function NotaSeguraApp() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      const mediaFinal = (n1 + n2 + n3) / 3;
      setResultado(`Média Final: ${mediaFinal.toFixed(2)}`);
    } else if (!isNaN(n1) && !isNaN(n2)) {
      const mediaDesejada = 60;
      const mediaAtual = (n1 + n2 + n3) / 3;
      const notaNecessaria = (mediaDesejada * 3) - (n1 + n2);
      setResultado(`Nota necessária na terceira avaliação: ${notaNecessaria.toFixed(2)}`);
    } else {
      setResultado('Insira pelo menos duas notas válidas.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={(text) => setNota3(text)}
      />
      <Button title="Calcular" onPress={calcularMedia} />
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
});
