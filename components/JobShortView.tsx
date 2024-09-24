import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { Card, View } from "react-native-ui-lib";

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
    <Card
      row
      onPress={() => router.push({pathname: "/job/", params: { id: job.job_id }})}
    >
      <Card.Section content={[
        {text: `ID ${job.job_id}`, text40: true, grey10: true}, 
        {text: getLastState(), text70: true, grey10: true}
      ]} 
        contentStyle={{ flex: 1, width: '100%', justifyContent: 'space-between', gap: 10}}
        style={{justifyContent: 'space-between', width: '100%', gap: 10}}
      />

    </Card> 
  );
};


export default JobShortView;
