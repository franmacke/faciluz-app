import { Text, View } from "@/components/Themed";
import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { StyleSheet, Pressable } from "react-native";


export const JobShortView = (job: JobProps) => {

  const router = useRouter()

  return (
    <Pressable style={styles.container} onPress={() => router.push({pathname: "/job/", params: { id: job.job_id }})}>
      <Text>ID {job.job_id}</Text>
      <Text>{ job.state_history[job.state_history.length - 1].status }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    minHeight: 50,
    backgroundColor: "red",
    gap: 10,
    flex: 1,
  },
});

export default JobShortView;
