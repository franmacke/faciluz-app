import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Colors, Dialog, Image, Text, View } from 'react-native-ui-lib';


export default function MediaPicker() {
    const [image, setImage] = useState<string | null>(null);
    const [userClosed, setUserClosed] = useState<boolean>(false);

    const router = useRouter();

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
		});

		if (!result.canceled) {
		    setImage(result.assets[0].uri);
		}
        
        setUserClosed(result.canceled)
	};

    const submitImage = () => {
        router.back()
        console.log("Subir imagen")
    }


    if (!image && !userClosed) {
        pickImage()
    }

    return (
        <View flex>
            <View flex>
                {image && 
                    <Image 
                        source={{ uri: image }} 
                        style={{ width: "100%", objectFit: "contain", height: "100%" }} 
                    />
                }
            </View>
            
            <View margin-10>
                {image &&
                    <Button marginV-5
                    label="Subir imagen" 
                    onPress={submitImage} 
                    borderRadius={10}
                    text70BL
                    grey90
                />
                }
                <Button marginV-5
                    text70BL grey90
                    label="Abrir galería" 
                    onPress={pickImage} 
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
                />
            </View>
        </View>
    )
}