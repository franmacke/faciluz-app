import { JobProps } from "@/props/JobProps"
import { ScrollView } from "react-native"
import { Card, View, Colors, Avatar } from "react-native-ui-lib"
import dayjs from "dayjs"
import ClientInfo from "./JobComponents/ClientInfo"
import { useEffect } from "react"
import CurrentStatus from "./JobComponents/CurrentStatus"




export const Job = (job: JobProps) => {

    useEffect(() => {
        console.log(job)
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
                        {text: job.description, text70: true, grey20: true}
                    ]}
                    paddingH-10
                    paddingB-10
                />
            </Card>
            
            <CurrentStatus state_history={job.state_history} />

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

            <ClientInfo client_id={job.client?.account_id} />
            
        </ScrollView>
    )
}

