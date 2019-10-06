import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, AsyncStorage, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then( storagedTechs => {

            try{
                const techsArray = storagedTechs.split(',').map(tech => tech.trim());
                setTechs(techsArray);
            }catch{
                console.log('Lista de tecnologias nao informadas.');
            }
            

            
        })
    }, []);

    function handleSubmit(){
        AsyncStorage.setItem('user','');
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            <TouchableOpacity onPress={handleSubmit} style={styles.logoutButton}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,

    },
    logoutButton: {
        height: 42,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})