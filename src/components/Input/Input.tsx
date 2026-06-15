import { TextInput, TextInputProps, Text, TouchableOpacity, Linking} from "react-native"
import { styles } from "./Styles";

interface InputProps extends TextInputProps {
    placeholder: string;
    cor: string;
    textoLink?: string;
    link?: string;
}

export const Input = ({placeholder, cor, textoLink, link, ...rest}: InputProps) => {

    const handlePress = () => {
        if (link) {
            Linking.openURL(link);
        }
    };

    return (
        <>
            <TextInput style={styles.entrada} placeholder={ placeholder } placeholderTextColor={ cor } {...rest}/>

            {textoLink && link &&( 
                <TouchableOpacity onPress={handlePress}> 
                    <Text style={styles.link}> { textoLink } </Text>
                </TouchableOpacity>
            )}
        </>
    )
}