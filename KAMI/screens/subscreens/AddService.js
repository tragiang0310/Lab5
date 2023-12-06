import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddService = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      if (value !== null) {
        setData(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdding = async (name, price) => {
    const apiURL = `https://kami-backend-5rs0.onrender.com/services`;
    const postData = { name: name, price: price };

    const token = data.token;

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(apiURL, postData, axiosConfig)
      .then(response => {
        Alert.alert('Success');
        console.log(response.data);
        console.log(token);
      })
      .catch(error => {
        console.log(token);
        Alert.alert('Failed:', error);
        console.log('Failed:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{margin: 14}}>
        <Text style={styles.title}>Service Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Input a service name"
          onChangeText={text => setName(text)}
        />
        <Text style={styles.title}>Price *</Text>

        <TextInput style={styles.input} onChangeText={text => setPrice(text)} />
        <Button
            style={{backgroundColor: '#EF506B'}}
            title="Add"
            onPress={() => handleAdding(name, price)}
        />
      </View>
    </View>
  );
};

export default AddService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: "#ffffff"
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: '#efeff5'
  },

  addBtn: {
    width: '100%',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#EF506B',
  },
});
