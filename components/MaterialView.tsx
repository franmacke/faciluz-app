import { MaterialProps } from "@/props/MaterialProps";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Card, Colors, Image, Modal, View } from "react-native-ui-lib";


function ValidationTag({ validator, validate_date }: MaterialProps) {

    if (validator) {
        return (
            <View flex padding-10 backgroundColor={Colors.green60} style={{ borderBottomEndRadius: 10, borderBottomLeftRadius: 10 }}>
                <Card.Section
                    content={[
                        { text: `Validado por ${validator.first_name} ${validator.last_name}`, text70BO: true, green10: true },
                        { text: dayjs(validate_date).locale('es').format("HH:mm [del dia] DD [de] MMMM, YYYY"), text90: true, grey30: true }
                    ]}
                    contentStyle={{ width: "100%", justifyContent: 'space-between' }}
                    style={{ justifyContent: 'space-between', width: '100%' }}
                />
            </View>
        )
    }

    return (
        <View flex padding-10 backgroundColor={Colors.yellow50} style={{ borderBottomEndRadius: 10, borderBottomLeftRadius: 10 }}>
            <Card.Section
                content={[
                    { text: "Pendiente de aprobacion", text70BO: true, grey10: true }
                ]}
                contentStyle={{ width: "100%", justifyContent: 'space-between'}}
                style={{ justifyContent: 'space-between', width: '100%' }}
            />
        </View>
    )
}


export function MaterialView({ material }: { material: MaterialProps; }) {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <Card onPress={() => setModalVisible(true)}>
            <Card.Image
                source={{ uri: material.material_url }}
                style={{ width: "100%", maxWidth: 700 }}
                aspectRatio={16/9}
            />

            <Card.Section 
                content={[
                    { text: `${material.uploader.first_name} ${material.uploader.last_name}`, text70BL: true, grey10: true },
                    { text: dayjs(material.upload_date).locale('es').format("HH:mm [del dia] DD [de] MMMM, YYYY"), text90: true, grey40: true }
                ]}
                contentStyle={{ width: "100%", justifyContent: 'space-between' }}
                style={{ justifyContent: 'space-between', width: '100%', gap: 10 }}
                padding-10
            />
            <ValidationTag {...material} />
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

