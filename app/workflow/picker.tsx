import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Colors, Image, View } from 'react-native-ui-lib';


export default function MediaPicker() {
    const [image, setImage] = useState<string | null>(null);
    const [userClosed, setUserClosed] = useState<boolean>(false);

    const router = useRouter();

    const goBack = () => {
        router.push("/workflow/material")
    }

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
        console.log("Subir imagen")
        goBack()
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
                    label="Abrir galería" 
                    onPress={pickImage} 
                    borderRadius={10}
                    outline={ image ? true : false }
                />
                <Button
                    label="Cancelar" 
                    onPress={goBack}
                    backgroundColor="transparent"
                    color={Colors.$outlinePrimary}
                />
            </View>
        </View>
    )
}