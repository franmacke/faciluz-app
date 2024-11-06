import { JobProps } from "@/props/JobProps";
import { ScrollView } from "react-native";
import JobDescription from "./JobDescription";
import { View } from "react-native-ui-lib";
import ClientInfo from "./JobComponents/ClientInfo";



export default function JobMatchShortView( job : JobProps ) {

    return (
        <ScrollView style={{flex: 1, width: "100%", padding: 10, maxWidth: 700 }}>
            <JobDescription  {...job} />
            <View padding-5/>
            <ClientInfo client_id={job.client?.account_id} />
        </ScrollView>
    )
}
