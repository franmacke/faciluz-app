import TabBarIcon from "@/components/TabBarIcon";
import { Link, Tabs } from "expo-router";



export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                  title: 'Trabajos',
                  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true
                }} 
            />
            <Tabs.Screen 
                name="material"
                options={{
                  title: 'Materiales',
                  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                  headerRight: () => (<Link href={'/workflow/upload'}>Subir material</Link>),
                }} 
            />
            <Tabs.Screen 
                name="options"
                options={{
                  title: 'Mas opciones',
                  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                }}
            />
            <Tabs.Screen 
                name="upload"
                options={{
                  title: 'Subir material',
                  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                  href: null
                }}
            />
        </Tabs>
    )
}