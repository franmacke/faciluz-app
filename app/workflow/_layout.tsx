import BackButton from "@/components/BackButton";
import TabBarIcon from "@/components/TabBarIcon";
import { Tabs } from "expo-router";



export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                  title: 'Detalles',
                  tabBarIcon: ({ color }) => <TabBarIcon name="view-dashboard-outline" color={color} />,
                  unmountOnBlur: true,
                  headerLeft: () => <BackButton />,
                }}
                
            />
            <Tabs.Screen 
                name="material"
                options={{
                  title: 'Materiales',
                  tabBarIcon: ({ color }) => <TabBarIcon name="hammer-wrench" color={color} />,
                  unmountOnBlur: true,
                  headerLeft: () => <BackButton />,
                }} 
            />
            <Tabs.Screen 
                name="options"
                options={{
                  title: 'Mas opciones',
                  tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
                  unmountOnBlur: true,
                  headerLeft: () => <BackButton />,
                }}
            />
            <Tabs.Screen 
                name="upload"
                options={{
                  title: 'Subir material',
                  // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                  href: null
                }}
            />
            <Tabs.Screen 
                name="camera"
                options={{
                  title: 'Cámara',
                  // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
            <Tabs.Screen 
                name="picker"
                options={{
                  title: 'Elegir de galería',
                  // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
        </Tabs>
    )
}