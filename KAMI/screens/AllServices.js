import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AllServices = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState('');


  const keyExtractor = item => item._id.toString();

  const Item = ({ service, onPress }) => {
    return (
      <TouchableOpacity onPress={() => onPress(service)}>
        <View style={styles.services}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{service.name}</Text>
          <Text style={styles.price}>{service.price}đ</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      service={item}
      onPress={() => navigation.navigate('ServiceDetail', { paramKey: item._id })}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('data');
        if (value !== null) {
          setData(JSON.parse(value));

          const apiURL = `https://kami-backend-5rs0.onrender.com/services/`;
          const token = JSON.parse(value).token;

          const axiosConfig = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };

          axios
            .get(apiURL, axiosConfig)
            .then(response => {
              setServices(response.data);
              setTitle(response.data.name)
            })
            .catch(error => {
              console.log('Error: ', error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./image/kami.png')}></Image>
      <View style={styles.header}>
        <Text style={styles.title}>
          Danh sách dịch vụ
        </Text>
        <Icon name="plus-circle-outline" size={30} style={styles.button} 
          onPress={() => navigation.navigate('AddService')}
        />
      </View>
      <FlatList
        data={services}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AllServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff'
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  title: {
    flex: 0.9,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    flex: 0.1,
    color: '#EF506B',
  },
  services : {
    flexDirection: 'row',
    flex: 1,
    borderColor: '#9D9D9D',
    borderWidth: 0.5,
    marginVertical: 4,
    paddingVertical: 16,
    paddingHorizontal:20,
    borderRadius: 10
  },
  name: {
      color: '#070707',
      fontWeight: '500',
      fontSize: 16,
      flex: 0.8
  },
  price: {
      color: '#2E2E2E',
      flex: 0.2,
      textAlign: 'right',
      fontSize: 14
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },

});
