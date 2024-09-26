import { JobProps } from "@/props/JobProps";
import { FlatList, StyleSheet } from "react-native";
import JobShortView from "./JobShortView";
import { View } from "react-native-ui-lib";

export default function JobList({ jobs }: { jobs: Array<JobProps> | null }) {
    return (
        <View flex width={"100%"}>
            <FlatList 
                data={jobs}
                renderItem={({ item }) => ( <JobShortView {...item} /> )}
                keyExtractor={(item) => item.job_id.toString()}
                contentContainerStyle={styles.contentContainer}
                // ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "grey" }} />}
                style={{ 
                    flex: 1,
                    width: "100%",
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        width: "100%",
    },
});