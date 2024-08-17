import { Text, View } from "@/components/Themed";
import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { StyleSheet, Pressable } from "react-native";

export const JobShortView = (job: JobProps) => {

  const router = useRouter()

  const getLastState = () => {
    try {
      return job.state_history[job.state_history.length - 1].status;
    } catch (error) {
      return "No status";
    }
  }

  return (
    <Pressable style={styles.container} onPress={() => router.push({pathname: "/job/", params: { id: job.job_id }})}>
      <Text>ID {job.job_id}</Text>
      <Text>{ getLastState() }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    minHeight: 75,
    padding: 10,
  },
});

export default JobShortView;
