import Urls from "@/constants/Urls";
import { useWorkflow } from "@/context/WorkflowContext";
import { useFetch } from "@/hooks/useFetch";
import { StateProps } from "@/props/JobProps";
import { Card, Text, View } from "react-native-ui-lib";


function StateShortView({ state }: { state: StateProps }) {

    return (
        <Card>
            <View row spread paddingR-10 paddingT-10>
                <Card.Section 
                    content={[
                        { text: state.substatus, text50: true, grey10: true },
                    ]}
                    style={{ padding: 10 }}
                />
                <Card.Section 
                    content={[
                        { text: state.status, text70: true, grey40: true },
                    ]}
                    style={{ padding: 10, backgroundColor: "yellow", borderRadius: 10 }}
                />
            </View>
            <Card.Section 
                content={[
                    { text: state.description, text70: true, grey40: true },
                    { text: state.created, text70: true, grey40: true },
                ]}
                style={{ padding: 10 }}
            />
        </Card>
    )
}



export default function StatesScreen() {

    const { jobId } = useWorkflow()
	const { response, error, loading } = useFetch<Array<StateProps>>(Urls.jobs.state_history + jobId + "/");

    return (
        <View padding-10 flex >
            <View>
                {loading && <Text>Loading...</Text>}
                {error && <Text>Error</Text>}
                {response && response.map((state, index) => <StateShortView key={index} state={state} />)}
            </View>
        </View>
    )
}