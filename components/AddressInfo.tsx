import { ClientProps } from "@/props/ClientProps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Colors, Text, View } from "react-native-ui-lib";


export default function AddressInfo({ address }: { address: ClientProps["address"] | undefined }) {

    if (!address) {
        return (
            <View flex center height={50}>
                <Text>No hay una direccion asignada</Text>
            </View>
        )
    }

    const addressStreetAndNumber = address.address_name + " " + address.street_number;
    const addressNeiborhood = address.neiborhood ? address.neiborhood : "";
    const addressFloor = address.floor ? address.floor : "";	
    const addressDoorNumber = address.door_number ?  address.door_number : ""; 


    return (
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
                <Card.Section
                    content={[
                        {text: addressStreetAndNumber + " " + addressNeiborhood, text70BO: true},
                        {text: addressFloor + addressDoorNumber, text70: true, grey20: true},
                    ]}
                    paddingV-10
                    paddingH-5
                />            
        </View>
    )
}
