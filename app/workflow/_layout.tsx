import BackButton from "@/components/BackButton";
import TabBarIcon from "@/components/TabBarIcon";
import { WorkflowProvider } from "@/context/WorkflowContext";
import { Tabs } from "expo-router";



export default function TabLayout() {
    return (
      <WorkflowProvider>
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
                name="states"
                options={{
                  title: 'Historial',
                  tabBarIcon: ({ color }) => <TabBarIcon name="chart-timeline-variant" color={color} />,
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
                name="budgeting"
                options={{
                  title: 'Presupuestar',
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
            <Tabs.Screen 
                name="coordinate"
                options={{
                  title: 'Coordinar',
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
            <Tabs.Screen 
                name="camera"
                options={{
                  title: 'Cámara',
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
            <Tabs.Screen 
                name="picker"
                options={{
                  title: 'Elegir de galería',
                  unmountOnBlur: true,
                  href: null,
                  tabBarStyle: { display: 'none' }
                }}
            />
        </Tabs>
      </WorkflowProvider>
    )
}