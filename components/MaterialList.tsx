import { MaterialProps } from "@/props/MaterialProps";
import { FlatList, Platform, StyleSheet } from "react-native";
import { MaterialView } from "./MaterialView";



export default function MaterialList ({ materialList }: { materialList: Array<MaterialProps> }) {

    return (
        <FlatList 
            data={materialList}
            renderItem={({item}) => <MaterialView material={item} />}
            keyExtractor={(item) => item.material_id.toString()}
            style={styles.container}
            contentContainerStyle={[
                styles.contentContainer, 
                Platform.OS === "web" && styles.contentContainerWeb
            ]}
        />                     
    )
}

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        width: "100%",
        padding: 10,
    },
    contentContainer: { 
        gap: 10, 
        width: "100%",
        paddingBottom: 50,
    },
    contentContainerWeb: {
        "alignItems": "center",
    }
    
})