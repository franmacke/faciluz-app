import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native-ui-lib";



export default function PoolScreen() {

    const router = useRouter();

    return (
        <View flex >
            <View flex spread paddingH-10 paddingT-10 center>
                <Text text30BL>Pedir trabajo</Text>
                <Text paddingH-50 paddingT-10>Pedí un nuevo trabajo. Podes estar trabajando en hasta 5 trabajo simultaneos</Text>
            </View>
            <View padding-10 gap-10>
                <Button 
                    label="Pedir trabajo"
                    borderRadius={5}  
                    onPress={() => router.push("/(worker)/match")}
                />
                <Button 
                    label="Volver"
                    borderRadius={5}  outline
                    onPress={() => router.back()}    
                />
            </View>
        </View>
    )
}