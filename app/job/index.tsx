import { Job } from "@/components/Job";
// import { Text, View as ThemedView } from "@/components/Themed";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native-ui-lib";
// import { View, StyleSheet } from "react-native";


export default function JobScreen() {

    const params = useLocalSearchParams();
    const { response, error, loading } = useFetch<JobProps>(Urls.jobs.active_jobs + params.id);

    return (
        <View flex centerH>
            { loading && <Text>Loading...</Text> }
            { error && <Text>{ error.message }</Text> }
            { response && <Job {...response} /> }
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
// });