import { MaterialProps } from "@/props/MaterialProps";
import { useState } from "react";
import { Button, Card, Image, Modal, View } from "react-native-ui-lib";
import object from "react-native-ui-lib/src/style/colorName";

export function MaterialView({ material }: { material: MaterialProps; }) {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const getDate = (date: string) => {
        return new Date(date).toLocaleDateString() + " " + new Date(date).toLocaleTimeString();
    }

    return (
        <Card onPress={() => setModalVisible(true)}>
            <Card.Image
                source={{ uri: material.material_url }}
                style={{ width: "100%" }}
                aspectRatio={16/9}
            />
            <Card.Section 
                content={[
                    {text: "Pendiente", text40: true, grey10: true},
                    {text: `${material.uploader.first_name} ${material.uploader.last_name}`, text70: true, grey10: true},
                    {text: getDate(material.upload_date), text90: true, grey10: true}
                ]}
                contentStyle={{ width: "100%", justifyContent: 'space-between' }}
                style={{justifyContent: 'space-between', width: '100%', gap: 10}}
                padding-10
            />
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View flex center>
                    <Image
                        source={{ uri: material.material_url }}
                        style={{ width: "100%", objectFit: "contain", height: "100%" }}
                    />
                </View>
                <Button label="Cerrar" onPress={() => setModalVisible(false)} borderRadius={10} margin-10 />
            </Modal>
        </Card>
    );
}

