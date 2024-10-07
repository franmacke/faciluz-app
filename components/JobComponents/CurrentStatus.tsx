import Codes from "@/constants/Codes";
import { StateProps } from "@/props/JobProps";
import { useState } from "react";
import { Card, Colors, ProgressBar } from "react-native-ui-lib";




export default function CurrentStatus({ state_history }: { state_history: Array<StateProps> }) {

    const [lastState, setLastState] = useState<StateProps>(state_history[state_history.length - 1])

    const getJobPercentage = (state: StateProps) => {
        switch(state.substatus) {
            case Codes.UPLOAD_MATERIALS:
                return 10;
            case Codes.COORDINATE_APPOINTMENT:
                return 80;
            case Codes.FINISHED:
                return 100;
            default:
                return 1
        }
    }

    return (
        <Card padding-10 gap-10 marginT-10>
            <Card.Section 
                content={[
                    { text: lastState.status, text50: true, grey10: true },
                    { text: lastState.description, text70: true, grey20: true }
                ]}
                padding-5
            />
            <ProgressBar progress={getJobPercentage(lastState)} progressColor={Colors.green40}/>
        </Card>
    )
}
