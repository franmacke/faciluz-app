import { JobProps } from "@/props/JobProps";
import dayjs from "dayjs";
import { Card, Colors, View } from "react-native-ui-lib";



export default function JobDescription({ job_id, date_created, priority, description }: JobProps) {

    return (
        <Card>
            <View row spread paddingH-10 paddingT-10 centerV>
                <Card.Section
                    content={[
                        {text: "Trabajo", text50BL: true, grey0: true },
                    ]}
                />
                <Card.Section
                    content={[
                        {text: "ID " + job_id.toString(), text60: true, grey30: true}
                    ]}
                />
            </View>
            <Card.Section 
                content={[
                    {text: dayjs(date_created).locale('es').format("DD [de] MMMM, YYYY [|] HH:mm"), text70: true, grey40: true}
                ]}
                paddingH-10
            />
            <View row marginV-10 gap-10 marginH-10>
                <Card.Section 
                    content={[
                        {text: priority, text70: true, yellow10: true},
                    ]}
                    padding-5
                    style={{backgroundColor: Colors.yellow60, borderRadius: 10, borderColor: Colors.yellow10, borderWidth: 1}}
                />
                <Card.Section 
                    content={[
                        {text: priority, text70: true, yellow10: true},
                    ]}
                    padding-5
                    style={{backgroundColor: Colors.yellow60, borderRadius: 10, borderColor: Colors.yellow10, borderWidth: 1}}
                />

            </View>
            <Card.Section 
                content={[
                    {text: description, text70: true, grey20: true}
                ]}
                paddingH-10
                paddingB-10
            />
        </Card>
    )
}
