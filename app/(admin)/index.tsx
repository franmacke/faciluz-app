import Urls from '@/constants/Urls';
import { useFetch } from '@/hooks/useFetch';
import { JobProps } from '@/props/JobProps';
import JobList from '@/components/JobList';
import { LoaderScreen, Text, View } from 'react-native-ui-lib';

export default function HomeScreen() {

  const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.active_jobs);

  return (
    <View center flex width={"100%"} padding-5>
      { loading && <LoaderScreen message='Cargando' /> }
      { error && <Text>{ error.message }</Text> }
      <JobList jobs={response} />
    </View>
  );
}