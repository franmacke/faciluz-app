import { Colors, Text, View } from "react-native-ui-lib";


export default function TypeTag({ text }: { text: string }) {

    const INTERNAL = "Internal";
    const EXTERNAL = "External";

    const parseType = (type: string) => {
        switch (type) {
            case INTERNAL:
                return "Material interno";
            case EXTERNAL:
                return "Material externo";
            default:
                return "Desconocido";
        }
    }

    const colors: { [key: string]: string } = {
        [INTERNAL]: Colors.blue30,
        [EXTERNAL]: Colors.green30,
    }

    const color = colors[text] || "black";

    return (
        <View top right absR style={{ backgroundColor: color, padding: 5, borderRadius: 5 }}>
            <Text style={{ color: "white" }}>{parseType(text)}</Text>
        </View>
    )
}