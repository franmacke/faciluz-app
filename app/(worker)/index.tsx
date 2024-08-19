import { Job } from "@/components/Job";
import { Text, View } from "@/components/Themed";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

const WORKER_ID = 1;

function WorkFlowShortView(job: JobProps) {
    const router = useRouter()

    const getLastState = () => {
        try {
        return job.state_history[job.state_history.length - 1].status;
        } catch (error) {
        return "No status";
        }
    }

    return (
        <Pressable onPress={() => router.push({pathname: "/workflow/", params: { id: job.job_id }})}>
        <Text>ID {job.job_id}</Text>
        <Text>{ getLastState() }</Text>
        </Pressable>
    );
}


export default function WorkerHomeScreen() {

    const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs + "?worker=" + WORKER_ID);

    return (
        <View>
            <Text>Worker Home</Text>
            { loading && <Text>Loading...</Text> }
            { error && <Text>{ error.message }</Text> }
            { response && response.map((job) => <WorkFlowShortView key={job.job_id} {...job} />) }
        </View>
    )
}