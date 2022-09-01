import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConcertCard from './components/ConcertCard';
import PetClipping from './components/PetClipping';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 1 - Marcação de show da banda </Text>
        <ConcertCard
          bandName='Metallica'
          city='Brasilia'
          country='Brasil'
          ticket={{ value: 5.50 }}
          date={new Date()}
        />
      </View>
      <View style = {styles.exercicio}>
        <Text style= {styles.titulo}> Exercício 2: </Text>
      </View>

      <View style = {styles.exercicio}>
        <Text style = {styles.titulo}> Exercício 3 - Calcula preço e duração da tosa </Text>
        <PetClipping porte='pequeno' />
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
