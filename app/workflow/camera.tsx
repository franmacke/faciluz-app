import { Button, Colors, Dialog, Image, Modal, Text, View } from "react-native-ui-lib";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CameraScreen() {

    const [permission, requestPermission] = useCameraPermissions();
    const [cameraVisible, setCameraVisible] = useState<boolean>(true);
    const [image, setImage] = useState<string | null>(null);
    const cameraRef = useRef<CameraView>(null);

    const router = useRouter();

    const takePicture = async () => {
        const photo = await cameraRef.current?.takePictureAsync();
        

        if (!photo) {
            return;
        }

        setImage(photo.uri);
        setCameraVisible(false);
    }
   
    if (!permission) {
        return <View />;
    }

    if (!permission?.granted) {
        return (
            <Modal visible={true}>
                <View flex center>
                    <Text>We need your permission to show the camera</Text>
                    <Button label={'Dar permiso'} onPress={requestPermission} />
                </View>
            </Modal>
        );
    }

    const submitImage = () => {
        router.back()
        console.log("Subir imagen")
    }

    return (
        <Modal visible={true}>
            { cameraVisible && 
                <CameraView style={{ flex: 1 }} facing={'back'} ref={cameraRef}>                   
                    <Button 
                        onPress={() => router.back()} 
                        iconSource={() => <FontAwesome name="close" size={40} color={Colors.white}/>} 
                        backgroundColor={Colors.$textDefault} 
                        style={{ height: 50, width: 50, borderRadius: 25, position: 'absolute', top: 20, right: 20, flex: 1, alignItems: 'center' }}
                        center                          
                    />
                    <View flex/>
                    <View center height={120}>
                        <Button 
                            onPress={takePicture} 
                            iconSource={() => <MaterialCommunityIcons name="camera-iris" size={40} color={Colors.white}/>}
                            backgroundColor={Colors.$textDefault}
                            style={{ height: 80, width: 80, borderRadius: 40, alignItems: 'center' }}
                        />
                    </View>
                </CameraView>
            }

            { !cameraVisible &&
                <View flex>
                    <View flex>
                        <Image 
                            source={{ uri: image }} 
                            style={{ width: "100%", objectFit: "contain", height: "100%" }} 
                        />
                    </View>
                    <View>
                        <Button 
                            label="Subir imagen" 
                            onPress={submitImage} 
                            borderRadius={10}
                            text70BL
                            grey90
                            margin-5
                        />
                        <Button 
                            label="Tomar de nuevo" 
                            onPress={() => setCameraVisible(true)}
                            text70BL grey10
                            margin-5
                            borderRadius={10}
                            backgroundColor={image ? "transparent" : Colors.$textPrimary}
                            color={ image ? Colors.grey10 : Colors.white }
                            style={ image ? { borderWidth: 1, borderColor: Colors.primary } : {} }
                        />
                        <Button 
                            label="Cancelar" 
                            onPress={() => router.back()}
                            backgroundColor="transparent"
                            text70BL grey10
                            margin-5
                        />
                    </View>
                </View>
            }    
        </Modal>   
    )
}