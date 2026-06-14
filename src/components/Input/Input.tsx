import { TextInput, TextInputProps } from "react-native"
import { styles } from "./Styles";

interface InputProps extends TextInputProps {
    placeholder: string;
}

export const Input = ({placeholder, ...rest}: InputProps) => {

    return (
        <TextInput style={styles.entrada} placeholder= { placeholder }/>
    )
}