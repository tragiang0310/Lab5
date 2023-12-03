import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Phone'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#EF506B',
        marginBottom: 24,
        marginTop: 72,
    },
    input: {
        borderColor: '#9D9D9D',
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        borderRadius: 12,
        paddingLeft: 12,
    },
    button: {
        backgroundColor: '#EF506B',
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
})