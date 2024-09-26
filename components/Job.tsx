import { JobProps } from "@/props/JobProps"
import { ScrollView } from "react-native"
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
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700 }}>
            <View row flex centerV style={{justifyContent: "space-between"}}>
                <Text text30 grey10>ID {job.job_id}</Text>
                <Badge
                    label={job.state_history[job.state_history.length - 1].status}
                    backgroundColor="green"
                    size={30}
                    labelStyle={{fontSize: 15}}
                />
            </View>

            <View paddingV-10>
                <Text text40 grey10>Trabajo</Text>
            </View>

            <Card>
                <Card.Section
                    content={[
                        {text: "Descripción", text70BO: true, grey10: true },
                        {text: job.description}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Fecha de creación", text70BO: true},
                        {text: job.date_created}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Prioridad", text70BO: true},
                        {text: job.priority}
                    ]}
                    padding-10
                />
                <Card.Section
                    content={[
                        {text: "Asignado a", text70BO: true},
                        {text: job.worker?.first_name + " " + job.worker?.last_name}
                    ]}
                    padding-10
                />
            </Card>

            <View paddingV-10>
                <Text text40>Cliente</Text>
            </View>
            <Card marginB-10>
                <Card.Section
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Nombre", text70BO: true},
                        {text: client?.account.first_name + " " + client?.account.last_name}
                    ]}
                    padding-10
                />
                <Card.Section
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Direccion", text70BO: true},
                        {text: client?.address.address_name},
                    ]}
                    padding-10
                />
                <Card.Section
                    contentStyle={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}
                    content={[
                        {text: "Telefono", text70BO: true},
                        {text: client?.account.phone_number}
                    ]}
                    padding-10
                />
            </Card>
        </ScrollView>
    )
}

