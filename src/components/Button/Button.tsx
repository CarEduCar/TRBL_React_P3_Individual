import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    tipo: priorityProps,
}

type priorityProps =  'ativo' | 'inativo' | 'vazio';

export const Button = ({ title, tipo, ...rest}: ButtonProps) => {

    const config = {
        ativo: { style: styles.button1, butStyle: styles.buttonText1},
        inativo: { style: styles.button2, butStyle: styles.buttonText2},
        vazio: { style: styles.button3, butStyle: styles.buttonText3}
    };

    const current = config[tipo];

    return <TouchableOpacity activeOpacity={0.7} style={current.style} {...rest}>
                
          <Text style={current.butStyle}>
            { title }
          </Text>
        </TouchableOpacity>;
}