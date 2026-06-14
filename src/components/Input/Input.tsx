import { TextInput, TextInputProps } from "react-native"
import { styles } from "./Styles";

interface InputProps extends TextInputProps {
    placeholder: string;
    cor: string
}

export const Input = ({placeholder, cor, ...rest}: InputProps) => {

    return (
        <TextInput style={styles.entrada} placeholder={ placeholder } placeholderTextColor={ cor }/>
    )
}