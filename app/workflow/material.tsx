import { Text, View } from "@/components/Themed";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { MaterialProps } from "@/props/MaterialProps";
import { StyleSheet } from "react-native";
import MaterialList from "@/components/MaterialList";

const JOB_ID = 1;

export default function MaterialsScreen() {

    const { response, error, loading } = useFetch<Array<MaterialProps>>(Urls.jobs.materials + "?job=" + JOB_ID);

    return (
        <View style={styles.container}>
            { loading && <Text>Loading...</Text>}
            { error && <Text>Error: {error.message}</Text>}
            { response?.length ? 
                <MaterialList materialList={response} /> : 
                <Text>No tiene materiales</Text> 
            } 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });