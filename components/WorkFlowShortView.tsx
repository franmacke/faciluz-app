import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Themed";

export function WorkFlowShortView(job: JobProps) {
    const router = useRouter();

    const getLastState = () => {
        try {
            return job.state_history[job.state_history.length - 1].status;
        } catch (error) {
            return "No status";
        }
    };

    return (
        <Pressable 
            onPress={() => router.push({ pathname: "/workflow/", params: { id: job.job_id } })}
            style={styles.container}
        >
            <Text>ID {job.job_id}</Text>
            <Text>{getLastState()}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        minHeight: 50,
        padding: 10
    }
});
