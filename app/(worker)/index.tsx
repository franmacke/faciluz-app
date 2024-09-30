import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { WorkFlowShortView } from "@/components/WorkFlowShortView";
import { LoaderScreen, Text, View } from "react-native-ui-lib";

const WORKER_ID = 1;

export default function WorkerHomeScreen() {

    const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs + "?worker=" + WORKER_ID);

    return (
        <View centerH flexS width={"100%"} padding-5>
            { loading && <LoaderScreen message="Cargando"/>}
            { error && !response && <Text>{ error.message }</Text> }
            { response && response.map((job) => <WorkFlowShortView key={job.job_id} {...job} />) }
        </View>
    )
}
