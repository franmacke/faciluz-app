import { Job } from "@/components/Job";
import { Text, View } from "@/components/Themed";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";


export default function WorkflowScreen() {
    const params = useLocalSearchParams();

    if (!params.id) {
        return <Redirect href={"/(worker)/"} />
    }

    const { response, error, loading } = useFetch<JobProps>(Urls.jobs.active_jobs + params.id);

    return (
        <View style={styles.container}>
            { loading && <Text>Loading...</Text> }
            { error && <Text>{ error.message }</Text> }
            { response && <Job {...response} /> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});