import {Text} from 'react-native'

type Porte = {
    porte: 'pequeno' | 'medio' | 'grande',
}
const valores = {
        'pequeno' : 15,
        'medio' : 24,
        'grande' : 35
}
const duracao = {
        'pequeno' : 20,
        'medio' : 35,
        'grande' : 50
    
}
export default function PetClipping (props : Porte) {
    if (props.porte === 'pequeno')
    return ( 
        <Text>{`O corte custará ${valores.pequeno} reais e durará ${duracao.pequeno} minutos.`} </Text>
    )
    else if (props.porte === 'medio')
    return ( 
        <Text>{`O corte custará ${valores.medio} reais e durará ${duracao.medio} minutos.`} </Text>
    )
    else
    return ( 
        <Text>{`O corte custará ${valores.grande} reais e durará ${duracao.grande} minutos.`} </Text>
    )
}