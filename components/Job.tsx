import { JobProps } from "@/props/JobProps"
import { ScrollView } from "react-native"
import ClientInfo from "./JobComponents/ClientInfo"
import CurrentStatus from "./JobComponents/CurrentStatus"
import JobDescription from "./JobDescription"
import { WorkerInfo } from "./WorkerInfo"





export const Job = ({ job }:{job: JobProps}) => {

    return (
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700 }}>
            <JobDescription {...job} />

            <CurrentStatus state_history={job.state_history} />

            <WorkerInfo worker={job.worker} />

            <ClientInfo client_id={job.client?.account_id} />
            
        </ScrollView>
    )
}

