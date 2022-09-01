import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorDot from './components/ColorDot';
import { SafeAreaProvider } from "react-native-safe-area-context";

import ConcertCard from './components/ConcertCard';
import PetClipping from './components/PetClipping';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 1 - Marcação de show da banda </Text>
        
      </View>
      <View style = {styles.exercicio}>
        <Text style= {styles.titulo}> Exercício 2 - Adiciona e remove ingressos </Text>
      </View>

      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 3 - Calcula preço e duração da tosa </Text>
      </View>

      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 4 - Cria bolinha com input do usuário  </Text>
        <ColorDot/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  titulo: {
    width: '100%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
   textAlign: 'center',
   marginVertical: 10,
   fontSize: 16,
   fontWeight: 'bold',
   
  },
  exercicio: {
    justifyContent: 'center',
    alignItems:  'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    marginBottom: 15
  }
});
