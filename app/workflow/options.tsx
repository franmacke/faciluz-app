import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Platform } from "react-native";
import { Card, Colors, ListItem, Text, View } from "react-native-ui-lib";


type OptionProps = { 
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'], 
    text: string, 
    onPress: () => void,
    color?: string
}


function OptionView({ icon, text, onPress, color }: OptionProps) {

    return (
        <ListItem
            activeBackgroundColor={Colors.grey60}
            activeOpacity={0.3}
            height={77.5}
            onPress={onPress}
            paddingH-10
        >
            <ListItem.Part left containerStyle={
                Platform.OS == "web" ? 
                    { paddingRight: 30 } : 
                    { paddingRight: 10 }
            }>
                    <MaterialCommunityIcons name={icon} size={24} color={color} />
            </ListItem.Part>
            <ListItem.Part middle>
                    <Text text70 color={color}>{text}</Text>
            </ListItem.Part>
            <ListItem.Part right>
                <MaterialCommunityIcons name="chevron-right" size={24} color={color} />
            </ListItem.Part>
        </ListItem>
    )
}


export default function WorkflowOptionsScreen() {

    const router = useRouter()

    const options: Array<OptionProps> = [
        { icon: "cash", text: "Presupuestar", onPress: () => router.push("/workflow/budgeting")},
        { icon: "handshake-outline", text: "Coordinar con cliente", onPress: () => router.push("/workflow/coordinate")},
    ]

    const actions: Array<OptionProps> = [
        { icon: "pause-circle-outline", text: "Pausar trabajo", onPress: () => Alert.alert("Pausar trabajo"), color: Colors.red20 },
        { icon: "cancel", text: "Cancelar trabajo", onPress: () => Alert.alert("Cancelar trabajo"), color: Colors.red20 },
    ]

    return (
        <View flex>
            <View flexS centerH padding-10>
                <Card style={{ maxWidth: 500, width: "100%" }}>
                    {options.map((option, index) => <OptionView key={index} {...option} />)}
                </Card>
            </View>
            
            <View flexS centerH padding-10>
                <Card style={{ maxWidth: 500, width: "100%" }}>
                    {actions.map((option, index) => <OptionView key={index} {...option} />)}
                </Card>
            </View>
        </View>
    )
}