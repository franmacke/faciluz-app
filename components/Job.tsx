import { JobProps } from "@/props/JobProps"
import { Text } from "@/components/Themed"
import { View } from "react-native"
import { useEffect, useState } from "react"
import Urls from "@/constants/Urls"
import { ClientProps } from "@/props/ClientProps"

export const Job = (job: JobProps) => {

    const [client, setClient] = useState<ClientProps|null>(null)

    useEffect(() => {
        fetch(Urls.clients.list + job.client?.account_id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setClient(data)
            })
    }, [])

    return (
        <View>
            <Text>ID {job.job_id}</Text>
            
            <Text>Ultimo Estado: {job.state_history[job.state_history.length - 1].status}</Text>
            <Text>Creado el: {job.date_created}</Text>
            <Text>Prioridad: {job.priority}</Text>
            { job.active && <Text>Esta activo </Text> }

            <Text>Cliente: {job.client?.first_name}</Text>
            <Text>Telefono: {job.client?.phone_number}</Text>
            {client && <Text>Direccion: {client?.address.address_name}</Text>}
        </View>
    )
}