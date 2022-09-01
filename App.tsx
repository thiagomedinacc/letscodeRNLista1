import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConcertCard from './components/ConcertCard';
import PetClipping from './components/PetClipping';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 1: </Text>
        
      </View>
      <View style = {styles.exercicio}>
        <Text style= {styles.titulo}> Exercício 2 - Adiciona e remove ingressos </Text>
        <ConcertCard
          bandName='Metallica'
          city='Brasilia'
          country='Brasil'
          tickets= {[{type: 'standard' , value : 10}, {type: 'platinum', value: 20} , {type: 'vip', value:30}]}
          date={new Date()}
        />
      </View>

      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 3: </Text>
      </View>

      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 4: </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
   // alignItems: 'center',
    //justifyContent: 'center',
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
