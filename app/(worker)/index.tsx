import { Text, View } from "@/components/Themed";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { WorkFlowShortView } from "@/components/WorkFlowShortView";
import { StyleSheet } from "react-native";

const WORKER_ID = 1;

export default function WorkerHomeScreen() {

    const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs + "?worker=" + WORKER_ID);

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1}}>
            <View style={styles.container}>
                { loading && <Text>Loading...</Text> }
                { error && <Text>{ error.message }</Text> }
                { response && response.map((job) => <WorkFlowShortView key={job.job_id} {...job} />) }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        maxWidth: 500,
        width: "100%"
    }
});