
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { MaterialProps } from "@/props/MaterialProps";
import { Dimensions, StyleSheet } from "react-native";
import MaterialList from "@/components/MaterialList";
import { ActionSheet, FloatingButton, GridList, LoaderScreen, Text, View } from "react-native-ui-lib";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { MaterialView } from "@/components/MaterialView";

const JOB_ID = 1;

export default function MaterialsScreen() {

	const { response, error, loading } = useFetch<Array<MaterialProps>>(Urls.jobs.materials + "?job=" + JOB_ID);
	const [actionSheetVisible, setActionSheetVisible] = useState<boolean>(false);
	const [dimensions, setDimensions] = useState(Dimensions.get('window'));

	const router  = useRouter()

	useEffect(() => {
		const subscription = Dimensions.addEventListener(
		  'change',
		  ({window, screen}) => {
			setDimensions(screen);
		  },
		);
		return () => subscription?.remove();
	  });

    return (
      	<View flex centerH>
			{ loading && <LoaderScreen message="Cargando"/>}
			{ error && <Text>Error: {error.message}</Text>}
			{ response?.length ? 
				<MaterialList materialList={response} /> : 
				<Text>No tiene materiales</Text> 
			} 

			<FloatingButton
				visible={true}
				button={{ label: "Subir material", onPress: () => setActionSheetVisible(true) }}
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