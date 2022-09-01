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
    
        'pequeno' : 15,
        'medio' : 24,
        'grande' : 35
    
}
export default function PetClipping (props : Porte) {
    if (props.porte === 'pequeno')
    return ( 
        <Text>{`O corte custará ${valores.pequeno} e terá valor de ${duracao.pequeno}`} </Text>
    )
    else if (props.porte === 'medio')
    return ( 
        <Text>{`O corte custará ${valores.medio} e terá valor de ${duracao.medio}`} </Text>
    )
    else
    return ( 
        <Text>{`O corte custará ${valores.grande} e terá valor de ${duracao.grande}`} </Text>
    )
}