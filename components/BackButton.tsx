import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";



export default function BackButton() {
    
    const router = useRouter();

    return (
        <Pressable onPress={() => router.back()} style={{ paddingLeft: 10}}>
            <MaterialCommunityIcons name="chevron-left" size={30} color={"black"} />
        </Pressable>
    )
}