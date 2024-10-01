import { Button, Colors, Modal, TextField, View } from "react-native-ui-lib";
import DateTimePicker from 'react-native-ui-datepicker';
import { useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/es';
import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CoordinateScreen() {
    const [date, setDate] = useState<dayjs.Dayjs|string>(dayjs());

    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter()
   
    const goBack = () => {
        setModalVisible(false)
        router.push("/workflow/options")
    }

    const handleSubmit = () => {
        // PUSH DATE LOGIC

        setModalVisible(false)
        router.push("/workflow/")
    }
    
    return (
        <View flex padding-10 center>
            <View flex center style={{ maxWidth: 500 }} >
                <Pressable onPress={() => setModalVisible(true)} style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <TextField 
                        value={dayjs(date).locale('es').format('dddd DD [de] MMM').replace(/^\w/, (c) => c.toUpperCase()) }
                        editable={false}
                        text30BL
                        color={Colors.$iconPrimary}
                        onPress={() => setModalVisible(true)}
                        centered
                    />
                    <TextField 
                        value={dayjs(date).locale('es').format('HH:mm A') }
                        editable={false}
                        text40BL grey30
                        onPress={() => setModalVisible(true)}
                        centered
                    />
                </Pressable>
            </View>

            <View gap-10 style={{ width: "100%", maxWidth: 500}}>
                <Button
                    borderRadius={10}
                    label="Coordinar"
                    onPress={handleSubmit}
                />
                <Button
                    borderRadius={10}
                    label="Seleccionar fecha"
                    onPress={() => setModalVisible(true)}
                    outline
                />
                <Button
                    borderRadius={10}
                    label="Cancelar"
                    onPress={goBack}
                    backgroundColor={"transparent"}
                    color={Colors.$iconDanger}
                />
            </View>

            <Modal visible={modalVisible}>
                <View flex backgroundColor={Colors.$backgroundNeutral}>
                    <Modal.TopBar 
                        title={'Elegir fecha y hora'} 
                        cancelIcon={null}
                        doneIcon={null}
                        containerStyle={{ backgroundColor: Colors.$backgroundDefault }}
                        titleStyle={{ color: Colors.$textDark, fontSize: 20, fontWeight: 'bold' }}
                        
                    />

                    <View flex style={{ maxWidth: 500, margin: "auto", width: "100%"  }} backgroundColor={Colors.$backgroundNeutral} >
                        <View flex backgroundColor={Colors.$backgroundDefault} margin-10 style={{ borderRadius: 10 }}>
                            <DateTimePicker
                                mode="single"
                                timePicker
                                date={date}
                                locale={'es'}
                                displayFullDays={true}
                                height={500}
                                // @ts-ignore
                                onChange={(params) => setDate(params.date)}
                                minDate={dayjs().subtract(1, 'day')}
                                timePickerDecelerationRate={"fast"}
                                headerTextStyle={{ color: Colors.$iconPrimary }}
                            /> 
                        </View>
                        <View padding-10 gap-10>
                            <Button
                                borderRadius={10}
                                label="Aceptar"
                                onPress={() => setModalVisible(false)}
                            />
                            <Button
                                borderRadius={10}
                                label="Cancelar"
                                onPress={() => setModalVisible(false)}
                                color={Colors.$iconDanger}
                                backgroundColor={"transparent"}
                            />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.$backgroundDark
    }
})