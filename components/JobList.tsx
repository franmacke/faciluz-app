import { JobProps } from "@/props/JobProps";
import { FlatList, StyleSheet } from "react-native";
import JobShortView from "./JobShortView";
import { View }  from "./Themed";

export default function JobList({ jobs }: { jobs: Array<JobProps> | null }) {
    return (
        <FlatList 
            data={jobs}
            renderItem={({ item }) => ( <JobShortView {...item} /> )}
            keyExtractor={(item) => item.job_id.toString()}
            contentContainerStyle={styles.contentContainer}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "grey" }} />}
            style={{ width: "100%", maxWidth: 500 }}
            
        />
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },
});