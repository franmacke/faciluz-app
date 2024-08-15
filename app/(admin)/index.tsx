import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Urls from '@/constants/Urls';
import { useFetch } from '@/hooks/useFetch';
import { JobProps } from '@/props/JobProps';
import JobList from '@/components/JobList';

export default function HomeScreen() {

  const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs);

  return (
    <View style={styles.container}>
      { loading && <Text>Loading...</Text> }
      { error && <Text>{ error.message }</Text> }
      <JobList jobs={response} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
