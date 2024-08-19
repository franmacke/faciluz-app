import { Text, View } from "@/components/Themed";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function UploadScreen() {
    const [camera, setCamera] = useState(false); 
    const [permission, requestPermission] = useCameraPermissions();
   

    if (!permission) {
        return <View />;
    }

    // https://docs.expo.dev/versions/latest/sdk/imagepicker/

    // if (!permission.granted) {
    //     return (
    //       <View style={styles.container}>
    //         <Text style={styles.message}>We need your permission to show the camera</Text>
    //         <Pressable onPress={requestPermission}>
    //             <Text>Request Permission</Text>
    //         </Pressable>
    //       </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setCamera(!camera)}>
                <Text>Sacar con la camara</Text>
            </Pressable>
            {camera && (
                <CameraView style={styles.camera} facing={'back'} />
            )}
            <Pressable>
                <Text>Desde la galeria</Text>
            </Pressable>
            <Pressable>
                <Text>Marcar como sin materiales</Text>
            </Pressable>
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
})
