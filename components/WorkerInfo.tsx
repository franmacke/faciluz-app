import { AccountProps } from "@/props/UserProps"
import { Avatar, Card, Colors, View } from "react-native-ui-lib"


export const WorkerInfo = ({ worker }: { worker: AccountProps | null }) => {
    
    
    if (!worker) {
        return (
            <Card marginV-10 left padding-5>
                <View flex center height={50}>
                <Card.Section
                        content={[
                            {text: "No hay un trabajador asignado" ,text70BO: true},
                            {text: "Trabajador asignado", text80: true, grey20: true},
                        ]}
                        padding-10
                    />
                </View>
            </Card>
        )
    }

    return (
        <View>
            <Card marginV-10 >
                <View flex row centerV gap-10 padding-10>
                    <Avatar 
                        label={worker.first_name[0]} 
                        labelColor={Colors.$backgroundGeneralHeavy}
                        backgroundColor={Colors.$backgroundGeneralLight}
                    />
                    <Card.Section
                        content={[
                            {text: worker.first_name + " " + worker.last_name, text70BO: true},
                            {text: "Trabajador asignado", text80: true, grey20: true},
                        ]}
                        padding-10
                    />
                </View>
            </Card>
        </View>
    )

}
