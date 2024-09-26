
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { MaterialProps } from "@/props/MaterialProps";
import { StyleSheet } from "react-native";
import MaterialList from "@/components/MaterialList";
import { ActionSheet, FloatingButton, Hint, LoaderScreen, Text, View } from "react-native-ui-lib";
import { useState } from "react";

const JOB_ID = 1;

export default function MaterialsScreen() {

	const { response, error, loading } = useFetch<Array<MaterialProps>>(Urls.jobs.materials + "?job=" + JOB_ID);
	const [actionSheetVisible, setActionSheetVisible] = useState<boolean>(false);

    return (
      <View flex center>
        <View style={styles.container}>
			{ loading && <LoaderScreen message="Cargando"/>}
			{ error && <Text>Error: {error.message}</Text>}
			{ response?.length ? 
				<MaterialList materialList={response} /> : 
				<Text>No tiene materiales</Text> 
			} 
			<FloatingButton
				visible={true}
				button={{
					label: "Subir material",
					onPress: () => setActionSheetVisible(true),
				}}
				bottomMargin={20}
			/>
			<ActionSheet 
				visible={actionSheetVisible}
				title={'Subir material'} 
				message={'Elija un método para subir material'} 
				cancelButtonIndex={3} 
				destructiveButtonIndex={0} 
				options={[  
					{ label: 'Sacar con la cámara', onPress: () => console.log('camera')},  
					{ label: 'Subir desde galería', onPress: () => console.log('gallery')},
					{ label: 'No usa materiales', onPress: () => console.log('no materiales')},  
					{ label: 'Cancelar', onPress: () => setActionSheetVisible(false) },
				]}
				onDismiss={() => setActionSheetVisible(false)}
				containerStyle={{marginBottom: 50}}
			/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
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