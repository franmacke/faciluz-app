import { MaterialCommunityIcons } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string;}) {
    return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}