import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, Dimensions, TouchableOpacity, secureTextEntry, } from 'react-native';



export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça Seu Login🔐</Text>
            <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor={"black"} ></TextInput>
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"black"} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.login}><Text style={styles.Textlogin}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('Home')}><Text style={styles.Textlogin}>Voltar</Text></TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3', 
    },
    input: {
        
        width: 250,
        margin: 15,
        borderWidth: 2,
        borderRadius: 20,
        color: '#ff06f',
        borderColor: "#ff06f",
    },
    login: {
        alignSelf: 'center',
        width: 80,
        height: 40,
        color: "#F8F8FF",
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B8860B",

    },
    voltar: {
        alignSelf: 'center',
        width: 80,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B8860B",

    },
    title: {
        alignSelf: 'center',
        fontSize: 35,
        margin: 50,
        color: "#ff06f",
        fontWeight: "bold"
    },
});