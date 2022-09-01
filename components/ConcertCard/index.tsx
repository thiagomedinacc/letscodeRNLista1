import { Text } from 'react-native';

type Ticket = {
    value: number
}
interface ConcertCardProps {
    bandName: string
    country: string
    city: string
    date: Date
    ticket: Ticket
}

export default function ConcertCard (props: ConcertCardProps) {
    const valorFormatado = 'R$' + props.ticket.value.toFixed(2);
    return (
        <>
            <Text> {props.bandName}</Text>
            <Text> {props.city}</Text>
            <Text> {props.country}</Text>
            <Text> {props.date.toLocaleDateString()}</Text>
            <Text> {valorFormatado}  </Text>
        </>
    )
}
