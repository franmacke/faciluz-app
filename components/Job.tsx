import { JobProps } from "@/props/JobProps"
import { ScrollView } from "react-native"
import { Card, View, Colors, Avatar } from "react-native-ui-lib"
import dayjs from "dayjs"
import ClientInfo from "./JobComponents/ClientInfo"
import { useEffect } from "react"
import CurrentStatus from "./JobComponents/CurrentStatus"
import JobDescription from "./JobDescription"


export const Job = (job: JobProps) => {

    useEffect(() => {
        console.log(job)
    }, [])

    return (
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700 }}>
            <JobDescription {...job} />

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

