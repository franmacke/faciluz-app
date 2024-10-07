
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { MaterialProps } from "@/props/MaterialProps";
import { ActionSheet, FloatingButton, GridList, LoaderScreen, Text, View } from "react-native-ui-lib";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useWorkflow } from "@/context/WorkflowContext";
import { MaterialView } from "@/components/MaterialView";


export default function MaterialsScreen() {

	const [actionSheetVisible, setActionSheetVisible] = useState<boolean>(false);
	const router  = useRouter()
	
	const { jobId } = useWorkflow()
	const { response, error, loading } = useFetch<Array<MaterialProps>>(Urls.jobs.materials + "?job=" + jobId);

    return (
      	<View flex centerH>
			{ loading && <LoaderScreen message="Cargando"/>}
			{ error && <Text>Error: {error.message}</Text>}
			<View flex centerH style={{ width: "100%", marginBottom: 50}}>
				{ response?.length ? 
					<GridList
						data={response}
						renderItem={({ item }) => <MaterialView material={item} />}
						keyExtractor={(item) => item.material_id.toString()}
						numColumns={1}
						style={{ padding: 10, flex: 1, width: "100%",  maxWidth: 700 }}
						listPadding={10}
					/> :
					<Text>No tiene materiales</Text>		
				}
			</View>


			<FloatingButton
				visible={true}
				button={{ label: "+", onPress: () => setActionSheetVisible(true) }}
				bottomMargin={20}
			/>
			<ActionSheet 
				visible={actionSheetVisible}
				title={'Subir material'} 
				message={'Elija un método para subir material'} 
				destructiveButtonIndex={0} 
				options={[  
					{ label: 'Sacar con la cámara', onPress: () => router.push('/workflow/camera')},  
					{ label: 'Subir desde galería', onPress: () => router.push('/workflow/picker')},
					{ label: 'No usa materiales', onPress: () => console.log('no materiales')},  
					{ label: 'Cancelar', onPress: () => setActionSheetVisible(false) },
				]}
				onDismiss={() => setActionSheetVisible(false)}
				containerStyle={{ marginBottom: 30 }}
			/>
		</View>
    )
}