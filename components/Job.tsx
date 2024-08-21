import { JobProps } from "@/props/JobProps"
import { Text } from "@/components/Themed"
import { StyleSheet, View } from "react-native"
import { useEffect, useState } from "react"
import Urls from "@/constants/Urls"
import { ClientProps } from "@/props/ClientProps"

export const Job = (job: JobProps) => {

    const [client, setClient] = useState<ClientProps|null>(null)

    useEffect(() => {
        fetch(Urls.clients.list + job.client?.account_id)
            .then(response => response.json())
            .then(data => setClient(data))
    }, [])

    return (
        <View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>ID {job.job_id}</Text>
                { job.active ? <Text>Activo</Text> : <Text>Archivado</Text> }
            </View>
            <View style={styles.card}>
                <Text>Estado</Text>
                <View>
                    <Text>Ultimo Estado: {job.state_history[job.state_history.length - 1].status}</Text>
                    <Text>{job.state_history[job.state_history.length - 1].description}</Text>
                </View>
            </View>

            <Text>Creado el: {job.date_created}</Text>
            <Text>Prioridad: {job.priority}</Text>
            <Text>Descripcion: {job.description}</Text>
            { job.worker && <Text>Asignado a: {job.worker.first_name + " " + job.worker.last_name }</Text> }
            
            <View style={styles.card}>
                <Text>Datos del cliente</Text>
                <Text>Cliente: {job.client?.first_name}</Text>
                <Text>Telefono: {job.client?.phone_number}</Text>
                <Text></Text>
                {client && <Text>Direccion: {client.address.address_name}</Text>}
            </View>
            

        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        padding: 10,
    }
})