import { useState } from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native'


export default function ColorDot(){
    const [cor, setCor] = useState('');

    

    function handleSelectColor(cor: string) {
        if(cor > 'f') {
            return
        }
        if(cor.length < 3) {
        }
        setCor(cor);
    }
    return (
        <>
        <TextInput 
        style = {styles().input}
        maxLength = {6}
        keyboardType = 'decimal-pad'
        placeholder='Digite a cor...'
        onChangeText={(cor) => handleSelectColor(cor)}
        />
        <View style = {styles(cor).bolinha}>

        </View>
        </>
    )
}

const styles = (cor?: string) => StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 100
    },
    bolinha: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderRadius: 50,
        marginVertical: 12,
        backgroundColor: `#${cor}`
    },

})