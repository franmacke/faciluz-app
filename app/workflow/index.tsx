import { Job } from "@/components/Job";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { LoaderScreen, Text, View } from "react-native-ui-lib";


export default function WorkflowScreen() {
    const params = useLocalSearchParams();

    if (!params.id) {
        return <Redirect href={"/(worker)/"} />
    }

    const { response, error, loading } = useFetch<JobProps>(Urls.jobs.active_jobs + params.id);

    return (
        <View flex style={styles.container}>
            { loading && <LoaderScreen message="Cargando" /> }
            { error && <Text>{ error.message }</Text> }
            { response && <Job {...response} /> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});