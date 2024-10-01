import StateShortView from "@/components/StateShortView";
import Urls from "@/constants/Urls";
import { useWorkflow } from "@/context/WorkflowContext";
import { useFetch } from "@/hooks/useFetch";
import { StateProps } from "@/props/JobProps";
import { Card, Text, View } from "react-native-ui-lib";




export default function StatesScreen() {

    const { jobId } = useWorkflow()
	const { response, error, loading } = useFetch<Array<StateProps>>(Urls.jobs.state_history + jobId + "/");

    return (
        <View padding-10 flex style={{ width: "100%"}} centerH>
            <View flex centerH style={{ maxWidth: 500, width: "100%" }}>
                {loading && <Text>Loading...</Text>}
                {error && <Text>Error</Text>}
                {response && response.map((state, index) => <StateShortView key={index} state={state} />)}
            </View>
        </View>
    )
}