import { Text, View } from "@/components/Themed";
import { stringToDate } from "@/constants/Utils";
import { JobProps } from "@/props/JobProps";
import { StyleSheet } from "react-native";

export const JobShortView = (job: JobProps) => {
  console.log(typeof job.date_created)

  return (
    <View style={styles.container}>
      <Text>{job.job_id}</Text>
      <Text>{stringToDate(job.date_created).toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
});

export default JobShortView;
