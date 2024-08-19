import { MaterialProps } from "@/props/MaterialProps";
import { Text, View } from "./Themed";
import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";




export default function MaterialList ({ materialList }: {materialList: Array<MaterialProps>}) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {materialList.map(material => (
                <View key={material.material_id} style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={material.material_url}
                        contentFit="cover"
                        />
                    <Text>{material.upload_date}</Text>
                    <Text>{material.uploader.first_name} {material.uploader.last_name}</Text>
                </View>
            ))}           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300,
        width: "100%"
    },
    container: {
        height: "100%",
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})