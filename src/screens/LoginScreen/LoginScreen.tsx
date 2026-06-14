import { styles } from './Styles';
import React from 'react';
import { View, Text } from 'react-native';
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"

export default function LoginScreen() {

    return(
        
        <View style={styles.screen}>

            <Input placeholder="Endereço de E-mail" cor="#ffffff"/>

            <Input placeholder="Senha" cor="#ffffff"/>

            <Button title='Login' tipo='desativado'/>

            <Button title='Voltar' tipo='inativo'/>

        </View>
    )
}