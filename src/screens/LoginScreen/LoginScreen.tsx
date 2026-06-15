import { styles } from './Styles';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { AntDesign } from "@expo/vector-icons"

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const inputOK = email.trim().length > 0 && senha.trim().length > 0;

    return(
        <View style={styles.screen}>

            <TouchableOpacity style={styles.closeButton}>
                <AntDesign name="close" size={28} color="#ffffff" />
            </TouchableOpacity>

            <View style={styles.nav}>
                <Image source={require('../../../assets/CrunchLogo.png')} style={styles.logo} />
            </View>

            <Text style={ styles.title }> Login </Text>

            <View style={styles.inputs}>
                <Input placeholder="Endereço de E-mail" cor="#ffffff"
                value={email} onChangeText={setEmail} />

                <Input placeholder="Senha" cor="#ffffff" textoLink='ESQUECEU A SENHA?'
                link="https://sso.crunchyroll.com/pt-br/reset-password"
                value={senha} onChangeText={setSenha} />
            </View>

            <Button title='LOGIN' tipo={inputOK ? 'ativo': 'inativo'}/>
            <Button title='VOLTAR' tipo='vazio'/>

        </View>
    )
}