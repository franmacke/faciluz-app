import { StateProps } from "@/props/JobProps";
import dayjs from "dayjs";
import { Card, Colors, View } from "react-native-ui-lib";


export default function StateShortView({ state }: { state: StateProps }) {

    return (
        <Card style={{ width: "100%" }}>
            <View row spread paddingR-10 paddingT-10>
                <Card.Section 
                    content={[
                        { text: state.substatus, text50: true, grey10: true },
                    ]}
                    style={{ padding: 10 }}
                />
                <Card.Section 
                    content={[
                        { text: state.status, text70: true, grey10: true },
                    ]}
                    style={{ padding: 10, backgroundColor: Colors.yellow50, borderRadius: 10 }}
                />
            </View>
            <Card.Section 
                content={[
                    { text: state.description, text70: true, grey10: true },
                ]}
                style={{ padding: 10 }}
            />
            <View height={1} bg-grey70 marginT-10 marginH-10/>
            <Card.Section 
                content={[
                    { text: state.creator.first_name + " " + state.creator.last_name, text70: true, grey20: true },
                    { text: dayjs(state.created).locale('es').format("HH:mm [del] DD [de] MMMM, YYYY"), text70: true, grey40: true },
                ]}
                style={{ padding: 10 }}
            />
        </Card>
    )
}
