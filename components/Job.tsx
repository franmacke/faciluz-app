import { JobProps } from "@/props/JobProps"
import { ScrollView, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import Urls from "@/constants/Urls"
import { ClientProps } from "@/props/ClientProps"
import { Card, Text, View, Badge } from "react-native-ui-lib"

export const Job = (job: JobProps) => {

    const [client, setClient] = useState<ClientProps|null>(null)

    useEffect(() => {
        fetch(Urls.clients.list + job.client?.account_id)
            .then(response => response.json())
            .then(data => setClient(data))
    }, [])

    return (
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700}}>
            <View row flex centerV style={{justifyContent: "space-between"}}>
                <Text text30>ID {job.job_id}</Text>
                <Badge 
                    label={job.state_history[job.state_history.length - 1].status} 
                    backgroundColor="green"
                    size={30}
                    labelStyle={{fontSize: 15}}
                />
            </View>
            
            <View paddingV-10>
                <Text text40>Trabajo</Text>
            </View>

            <Card>
                <Card.Section 
                    content={[
                        {text: "Descripción", text70: true}, 
                        {text: job.description}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Fecha de creación", text70: true},
                        {text: job.date_created}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Prioridad", text70: true},
                        {text: job.priority}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Asignado a", text70: true},
                        {text: job.worker?.first_name + " " + job.worker?.last_name}
                    ]}
                    padding-10
                />
            </Card>


            {/* <Text>Creado el: {job.date_created}</Text>
            <Text>Prioridad: {job.priority}</Text>
            <Text>Descripcion: {job.description}</Text>
            { job.worker && <Text>Asignado a: {job.worker.first_name + " " + job.worker.last_name }</Text> }
             */}
            
            <View paddingV-10>
                <Text text40>Cliente</Text>
            </View>
            <Card>
                <Card.Section
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Nombre", text70: true},
                        {text: client?.account.first_name + " " + client?.account.last_name}
                    ]}
                    padding-10
                />
                <Card.Section 
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Direccion", text70: true}, 
                        {text: client?.address.address_name},                    
                    ]}
                    padding-10
                />
                <Card.Section
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Telefono", text70: true},
                        {text: client?.account.phone_number}
                    ]}
                    padding-10
                />
            </Card>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        padding: 10,
    }
})