import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('0373007856');
  const [password, setPassword] = useState('123');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (phone, password) => {

    const apiURL = `https://kami-backend-5rs0.onrender.com/auth`;
    const postData = { phone: phone, password: password };

    axios
      .post(apiURL, postData)
      .then(response => {
        AsyncStorage.setItem('data', JSON.stringify(response.data));
        navigation.replace('Main');
      })
      .catch(error => {
        console.log('Login failed:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setPhone(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <Button
        style={styles.button}
        title="Login"
        onPress={() => handleLogin(phone, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EF506B',
    marginBottom: 30,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
  },

  button: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#EF506B',
    height: 50,
    width: '80%',
    marginTop: 16,
    marginBottom: 10,
    borderRadius: 16,
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  }
});
