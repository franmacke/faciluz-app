import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";

export default function JobScreen() {

    const params = useLocalSearchParams();

    return (
        <View>
            <Text>Job Screen { params.id }</Text>
        </View>
    );
}