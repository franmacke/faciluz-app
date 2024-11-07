import { JobProps } from '@/props/JobProps';
import { useFetch } from '@/hooks/useFetch';
import Urls from '@/constants/Urls';
import { LoaderScreen, Text, View } from 'react-native-ui-lib';
import { WorkFlowShortView } from '@/components/WorkFlowShortView';

export default function ValidateScreen() {

  const { response, error, loading } = useFetch<Array<JobProps>>(Urls.jobs.validate);

  const jobsLoaded = response && response.length > 0;

  // TODO: CAMBIAR A SCROLL VIEW

  return (
    <View centerH flexS width={"100%"} padding-10>
        { loading && <LoaderScreen message="Cargando" /> }
        { error && <Text>{ error.message }</Text> }
        { jobsLoaded && response.map((job) => <WorkFlowShortView key={job.job_id} {...job} />) }
    </View>
  
  );
}
