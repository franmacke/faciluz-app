import TabBarIcon from "@/components/TabBarIcon";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import Colors from "@/constants/Colors";
import { Link, Tabs } from "expo-router";
import { useColorScheme } from "react-native";



export default function TabLayout() {

    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: useClientOnlyValue(false, true),
                headerRight: () => <Link href={"/(admin)"} >Switch</Link>,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Trabajos',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    unmountOnBlur: true
                }}
            />
        </Tabs>
    )
}