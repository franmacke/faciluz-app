import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { WorkFlowShortView } from "@/components/WorkFlowShortView";
import { Card, Colors, LoaderScreen, Text, View } from "react-native-ui-lib";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const WORKER_ID = 1;

export default function WorkerHomeScreen() {

    const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs + "?worker=" + WORKER_ID);

    const router = useRouter()

    return (
        <View centerH flexS width={"100%"} padding-10>
            { error && !response && <Text>{ error.message }</Text> }
            { loading && <LoaderScreen message="Cargando"/>}
            <Card
                row centerV marginB-10 padding-10
                style={{ width: '100%', maxWidth: 500, maxHeight: 200, borderWidth: 1, borderColor: Colors.grey50 }}
                onPress={() => router.push('pool')}
            >
                <View padding-10 paddingR-15>
                    <MaterialCommunityIcons name="plus" size={25}/>
                </View>
                <Card.Section 
                    content={[
                        {text: "Nuevo trabajo", text60: true, grey10: true},
                        {text: "Asignate un trabajo nuevo", text70: true, grey20: true}
                    
                    ]}
                />
            </Card>
            { response && response.map((job) => <WorkFlowShortView key={job.job_id} {...job} />) }
        </View>
    )
}
