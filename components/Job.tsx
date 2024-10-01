import { JobProps } from "@/props/JobProps"
import { ScrollView } from "react-native"
import { useEffect, useState } from "react"
import Urls from "@/constants/Urls"
import { ClientProps } from "@/props/ClientProps"
import { Card, View, Colors, Avatar } from "react-native-ui-lib"
import dayjs from "dayjs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export const Job = (job: JobProps) => {

    const [client, setClient] = useState<ClientProps|null>(null)

    useEffect(() => {
        fetch(Urls.clients.list + job.client?.account_id)
            .then(response => response.json())
            .then(data => setClient(data))
    }, [])
	

    return (
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700 }}>
            <Card>
                <View row spread paddingH-10 paddingT-10 centerV>
                    <Card.Section
                        content={[
                            {text: "Trabajo", text50BL: true, grey0: true },
                        ]}
                    />
                    <Card.Section
                        content={[
                            {text: "ID " + job.job_id.toString(), text60: true, grey30: true}
                        ]}
                    />
                </View>
                <Card.Section 
                    content={[
                        {text: dayjs(job.date_created).locale('es').format("DD [de] MMMM, YYYY [|] HH:mm"), text70: true, grey40: true}
                    ]}
                    paddingH-10
                />
                <View row marginV-10 gap-10 marginH-10>
                    <Card.Section 
                        content={[
                            {text: job.priority, text70: true, yellow10: true},
                        ]}
                        padding-5
                        style={{backgroundColor: Colors.yellow60, borderRadius: 10, borderColor: Colors.yellow10, borderWidth: 1}}
                    />
                    <Card.Section 
                        content={[
                            {text: job.priority, text70: true, yellow10: true},
                        ]}
                        padding-5
                        style={{backgroundColor: Colors.yellow60, borderRadius: 10, borderColor: Colors.yellow10, borderWidth: 1}}
                    />

                </View>
                <Card.Section 
                    content={[
                        {text: "Esto es una descripcion un poco mas larga de lo que hay que hacer", text70: true, grey20: true}
                    ]}
                    paddingH-10
                    paddingB-10
                />
            </Card>
            
            <Card marginV-10 >
                <View flex row centerV gap-10 padding-10>
                    <Avatar 
                        label={job.worker?.first_name[0]} 
                        labelColor={Colors.$backgroundGeneralHeavy}
                        backgroundColor={Colors.$backgroundGeneralLight}
                    />
                    <Card.Section
                        content={[
                            {text: job.worker?.first_name + " " + job.worker?.last_name, text70BO: true},
                            {text: "Trabajador asignado", text80: true, grey20: true},
                        ]}
                        padding-10
                    />

                </View>
            </Card>

            <Card>
                <Card.Section
                    paddingH-10 paddingT-10
                    content={[
                        {text: "Cliente", text50BL: true, grey10: true },
                    ]}
                />
                <View flex row centerV gap-10 padding-10>
                    <Avatar 
                        label={job.client?.first_name[0]} 
                        labelColor={Colors.$backgroundGeneralHeavy}
                        backgroundColor={Colors.$backgroundGeneralLight}
                    />
                    <Card.Section
                        content={[
                            {text: job.client?.first_name + " " + job.client?.last_name, text70BO: true},
                            {text: job.client?.phone_number, text70: true, grey20: true},
                        ]}
                        padding-10
                    />
                </View>
                <View flex row centerV gap-10 paddingH-10>
                    <MaterialCommunityIcons name="map-marker" size={30} color={Colors.red10} style={{ paddingHorizontal: 10}} />
                    <Card.Section
                        content={[
                            {text: client?.address.address_name + " " + client?.address.street_number + ", " + client?.address.neiborhood, text70BO: true},
                            {text: client?.address.floor + " " + client?.address.door_number, text70: true, grey20: true},
                        ]}
                        padding-10
                    />
                </View>
            </Card>
        </ScrollView>
    )
}

