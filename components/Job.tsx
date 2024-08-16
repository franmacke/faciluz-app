import { JobProps } from "@/props/JobProps"
import { Text } from "@/components/Themed"
import { View } from "react-native"

export const Job = (job: JobProps) => {
    return (
        <View>
            <Text>Job {job.job_id}</Text>
        </View>
    )
}