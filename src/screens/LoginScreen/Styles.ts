import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    screen: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: 20,
    },
    nav: {
        width: '100%',
        backgroundColor: '#060608'
    },
    closeButton: {
        position: 'absolute',
        top: 45,
        left: 20,
        padding: 10,
        zIndex: 1,
    },
    logo: {
        width: 220,
        height: 100,
        alignSelf: 'center',
        resizeMode: "contain",
    },
    title: {
        color: '#ffffff',
        fontSize: 25,
        marginTop: 25,
        marginBottom: 25,
    },
    esqueceuSenha: {
        color: '#ffffff',
    },
    inputs: {
        marginBottom: 25,
    },
});