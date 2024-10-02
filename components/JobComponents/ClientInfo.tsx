import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { ClientProps } from "@/props/ClientProps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Card, Colors, LoaderScreen, Text, View } from "react-native-ui-lib";


export default function ClientInfo({ client_id }: { client_id: number | undefined }) {

    // TODO: MANEJAR MEJOR LA LOGICA PARA PODER USARLO OFFLINE

    const { response: client, error, loading } = useFetch<ClientProps>(Urls.clients.list + client_id);

    if (loading) {
        return (
            <LoaderScreen 
                style={{ width: "100%", height: 100, borderRadius: 10 }} 
            />
        )
    }

    if (error) {
        return (
            <Card>
                <Card.Section
                    paddingH-10 paddingT-10
                    content={[{text: "Cliente", text50BL: true, grey10: true }]}
                />
                <View flex center height={50}>
                    <Text>No se pudo cargar la informacion del cliente</Text>
                </View>
            </Card>
        )
    }

    if (!client) {
        return (
            <Card>
                <Card.Section
                    paddingH-10 paddingT-10
                    content={[{text: "Cliente", text50BL: true, grey10: true }]}
                />
                <View flex center height={50}>
                    <Text>No se pudo cargar la informacion del cliente</Text>
                </View>
            </Card>
        )
    }


    return (
        <Card>
            <Card.Section
                paddingH-10 paddingT-10
                content={[
                    {text: "Cliente", text50BL: true, grey10: true },
                ]}
            />

            <View flex row centerV gap-10 padding-10>
                <Avatar 
                    label={client?.account.first_name[0]} 
                    labelColor={Colors.$backgroundGeneralHeavy}
                    backgroundColor={Colors.$backgroundGeneralLight}
                />
                <Card.Section
                    content={[
                        {text: client.account.first_name + " " + client.account.last_name, text70BO: true},
                        {text: client.account.phone_number, text70: true, grey20: true},
                    ]}
                    paddingV-10
                    paddingH-5
                />
            </View>
            <View flex row centerV gap-10 paddingH-10>
                <View
                    style={{ paddingHorizontal: 10, borderRadius: 50, backgroundColor: Colors.red60, height: 50, width: 50, flexShrink: 1, justifyContent: "center", alignItems: "center" }} 

                >
                    <MaterialCommunityIcons 
                        name="map-marker" 
                        size={30} 
                        color={Colors.red10} 
                    />
                </View>
                { loading ? <LoaderScreen style={{ minHeight: 100 }}/> :
                    <Card.Section
                        content={[
                            {text: client?.address.address_name + " " + client?.address.street_number + ", " + client?.address.neiborhood, text70BO: true},
                            {text: client?.address.floor + " " + client?.address.door_number, text70: true, grey20: true},
                        ]}
                        paddingV-10
                        paddingH-5
                    />
                }
                
            </View>
        </Card>
    )
}