import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

type Ticket = {
    type: "standard" | "vip" | "platinum"
    value: number
}

type TicketSimulation = Ticket & {
    amount: number
}

interface ConcertCardProps {
    bandName: string
    country: string
    city: string
    date: Date
    tickets: Ticket[],
}

let nroStandard = 0 ;
let nroVip = 0 ;
let nroPlatinum = 0  ;

export default function ConcertCard(props: ConcertCardProps) {
    const [nroIngressos, setNroIngressos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);


    function handleRemoveIngresso(ticket: Ticket) {
        if (nroIngressos == 0) return
        if (ticket.type === 'vip' && nroVip !== 0) {
            nroVip--;
            atualizaValorEQtd(ticket);
        }
        else if (ticket.type === 'platinum' && nroPlatinum !== 0) {
            nroPlatinum--;
            atualizaValorEQtd(ticket);
        }
        else if (ticket.type === 'standard' && nroStandard !== 0){
            nroStandard--;
            atualizaValorEQtd(ticket);
        }
    }

    function atualizaValorEQtd(ticket: Ticket) {
        setNroIngressos(nroIngressos - 1);
        setValorTotal(valorTotal - ticket.value);
    }

    function handleAddIngresso(ticket: Ticket) {
         setNroIngressos(nroIngressos + 1);
         setValorTotal(valorTotal + ticket.value);
         if (ticket.type === 'standard') nroStandard++;
         if (ticket.type === 'platinum') nroPlatinum++;
         if (ticket.type === 'vip') nroVip++;

    }
    return (
        <>
        
            <Text> {props.bandName}</Text>
            <Text> {props.city}</Text>
            <Text> {props.country}</Text>
            <Text> {props.date.toLocaleDateString()}</Text>

            {props.tickets.map((ticket, key)=> (
                <View style={{ flexDirection: 'row' }} >
                    <TouchableOpacity onPress={ () => handleRemoveIngresso(ticket)} style={styles.botaoRemove}>
                    </TouchableOpacity>
                    <Text > {ticket.type} </Text>
                    <TouchableOpacity onPress={ () => handleAddIngresso(ticket)} style={styles.botaoAdd}>
                    </TouchableOpacity>
                </View>
            ))}

            <Text>Ingressos comprados: {nroIngressos}  </Text>
            <Text>Valor total: {valorTotal}  </Text>
        </>
    )
}

const styles = StyleSheet.create({
  botaoRemove: {
    borderWidth : 1,
    borderRadius : 55,
    width: 20,
    backgroundColor: 'red'
  },
  botaoAdd: {
    borderWidth : 1,
    borderRadius : 55,
    width: 20,
    backgroundColor: 'green'
  },
  
});
