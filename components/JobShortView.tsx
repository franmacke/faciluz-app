import { Text, View } from "@/components/Themed";
import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { StyleSheet, Pressable } from "react-native";


export const JobShortView = (job: JobProps) => {

  const router = useRouter()

  return (
    <Pressable style={styles.container} onPress={() => router.push({pathname: "/job/", params: { id: job.job_id }})}>
      <Text>ID {job.job_id}</Text>
      <Text>{job.category}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    minHeight: 50,
  },
});

export default JobShortView;
