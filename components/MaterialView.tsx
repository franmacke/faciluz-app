import { MaterialProps } from "@/props/MaterialProps";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Card, Colors, Image, Modal, Text, View } from "react-native-ui-lib";
import { OverlayIntensityType } from "react-native-ui-lib/src/components/overlay";

function InternalTag({ text }: { text: string }) {
    return (
        <View top right absR style={{ backgroundColor: "black", padding: 5, borderRadius: 5 }}>
            <Text style={{ color: "white" }}>{text}</Text>
        </View>
    )
}


export function MaterialView({ material }: { material: MaterialProps; }) {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <Card onPress={() => setModalVisible(true)}>
            <Card.Image
                source={{ uri: material.material_url }}
                style={{ width: "100%", maxWidth: 500 }}
                aspectRatio={16/9}
                customOverlayContent={<InternalTag text={material.type}/>}
                overlayType={Image.overlayTypes.BOTTOM}
                overlayIntensity={OverlayIntensityType.LOW}
            />

            <Card.Section 
                content={[
                    {text: "Pendiente", text40: true, grey10: true},
                    {text: `${material.uploader.first_name} ${material.uploader.last_name}`, text70: true, grey10: true},
                    {text: dayjs(material.upload_date).locale('es').format("DD [de] MMMM, YYYY [a las] HH:mm"), text90: true, grey10: true}
                ]}
                contentStyle={{ width: "100%", justifyContent: 'space-between' }}
                style={{ justifyContent: 'space-between', width: '100%', gap: 10 }}
                padding-10
            />
            <View flex padding-10 backgroundColor={Colors.yellow50} style={{ borderBottomEndRadius: 10, borderBottomLeftRadius: 10 }}>
                <Card.Section
                    content={[
                        {text: "Pendiente de aprobacion", text80: true, grey10: true}
                    ]}
                    contentStyle={{ width: "100%", justifyContent: 'space-between'}}
                    style={{ justifyContent: 'space-between', width: '100%' }}
                />
            </View>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View flex center>
                    <Image
                        source={{ uri: material.material_url }}
                        style={{ objectFit: "contain", height: "100%", width: "100%", resizeMode: "contain" }}
                    />
                </View>
                <View centerH padding-10>
                    <Button 
                        label="Cerrar" 
                        onPress={() => setModalVisible(false)} 
                        borderRadius={10} 
                        style={{ maxWidth: 500, width: "100%" }}
                    />
                </View>
            </Modal>
        </Card>

    );
}

