import { styles } from './Styles';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from '../../components/Input/Input'

export default function LoginScreen() {

    return(
        
        <View style={styles.screen}>

            <Input placeholder="Endereço de E-mail"/>

            <Input placeholder="Senha"/>

        </View>
    )
}