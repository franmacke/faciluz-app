import { MaterialProps } from "@/props/MaterialProps";
import { Image } from "expo-image";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

export function MaterialView({ material }: { material: MaterialProps; }) {

    const getDate = (date: string) => {
        return new Date(date).toLocaleDateString() + " " + new Date(date).toLocaleTimeString();
    }

    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={material.material_url}
                contentFit="contain"
            />
            <View style={styles.imageDescription}>
                <Text>{material.uploader.first_name} {material.uploader.last_name}</Text>
                <Text>{getDate(material.upload_date)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 500,
        width: 500,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 500
    },
    imageDescription: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    }
})
