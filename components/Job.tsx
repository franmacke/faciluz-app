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
            <Text>------------</Text>
            <Text>Estado</Text>
            <View>
                <Text>Ultimo Estado: {job.state_history[job.state_history.length - 1].status}</Text>
                <Text>{job.state_history[job.state_history.length - 1].description}</Text>
            </View>
            <Text>------------</Text>

            <Text>Creado el: {job.date_created}</Text>
            <Text>Prioridad: {job.priority}</Text>
            <Text>Descripcion: {job.description}</Text>
            { job.worker && <Text>Asignado a: {job.worker.first_name + " " + job.worker.last_name }</Text> }
            { job.active && <Text>Esta activo </Text> }
            <Text>------------</Text>
            <Text>Datos del cliente</Text>
            <Text>Cliente: {job.client?.first_name}</Text>
            <Text>Telefono: {job.client?.phone_number}</Text>
            <Text></Text>
            {client && <Text>Direccion: {client.address.address_name}</Text>}
            <Text>------------</Text>

        </View>
    )
}