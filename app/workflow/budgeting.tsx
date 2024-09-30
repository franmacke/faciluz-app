import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { Button, Text, TextField, View } from "react-native-ui-lib";


export default function BudgetingScreen() {

    const [text, setText] = useState<string>("");
    const [keyboardStatus, setKeyboardStatus] = useState('');
    const [focused, setFocused] = useState(false);

    const priceFormatter = Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2
    });

    const router = useRouter()

    useEffect(() => {
        // console.log(priceFormatter.format(Number(text)));
    }, [text]);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus('Keyboard Shown'));
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus('Keyboard Hidden'));
    
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const replaceCommas = (value: string) => {
        return value ? value.replace(/,/g, "") : "";
    }

    const formatter = (value: string) => {
        const number = Number(replaceCommas(value));
        return isNaN(number) ? value : priceFormatter.format(number);
    }

    const handleSubmit = () => {
        console.log("Presupuestar")
        goBack()
    }

    const goBack = () => {
        router.push("/workflow/options")
    }

    return (
        <View padding-10 flex >
            <View flex center row >
                <TextField 
                    value={text}
                    onChangeText={text => setText(replaceCommas(text))}
                    placeholder="0.00"
                    style={{ fontSize: 50 }}
                    keyboardType="numeric"
                    formatter={value => value && formatter(value)}
                    leadingAccessory={<Text marginR-s1 $textNeutral text20>$</Text>}
                    text10
                    centered
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </View>

            <View gap-10 style={keyboardStatus === 'Keyboard Shown' && { display: 'none' }}>
                <Button 
                    label="Presupuestar"
                    onPress={handleSubmit}
                    borderRadius={5}
                    disabled={!text && !isNaN(Number(formatter(text))) || keyboardStatus === 'Keyboard Shown' || focused || text === ""}
                />
                <Button 
                    label="Cancelar"
                    onPress={goBack}
                    borderRadius={5}
                    outline 
                />
            </View>

        </View>
    )
}