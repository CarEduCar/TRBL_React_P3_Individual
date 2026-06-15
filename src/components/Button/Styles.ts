import { StyleSheet } from "react-native";

const baseButton = {
    width: 320,
    height: 42,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginTop: 20,
    borderRadius: 25,
};

const baseText = {
    fontSize: 15,
    fontWeight:'bold' as const,
};

export const styles = StyleSheet.create({

    // ----- Tipo: ativo -----

    button1: {
        ...baseButton,
        backgroundColor:'#ff630c',
    },
    buttonText1: {
        ...baseText,
        color: '#000000',
    },
    
    // ----- Tipo: inativo -----

    button2: {
        ...baseButton,
        backgroundColor:'rgb(0, 0, 0)',
        borderWidth: 2,
        borderColor: '#5a5a5a'
    },
    buttonText2: {
        ...baseText,
        color: '#5a5a5a',
    },

    // ----- Tipo: vazio -----

    button3: {
        ...baseButton,
        backgroundColor:'rgb(0, 0, 0)',        
    },
    buttonText3: {
        ...baseText,
        color: '#ff630c',
    },
})