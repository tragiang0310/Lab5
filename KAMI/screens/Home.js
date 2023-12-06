import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import AllServices from './AllServices';

import AddCustomer from './subscreens/AddCustomer';
import AddService from './subscreens/AddService';
import ServiceDetail from './subscreens/ServiceDetail';
import UpdateService from './subscreens/UpdateService';
import { Button, Text } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={AllServices} options={{ 
      headerTitle: 'HUYỀN TRINH',
      headerRight: () => (
        <MaterialIcon name="account-circle" color="#fff" size={26} style={{right: 12}}/>
      ),
      headerStyle: {
        backgroundColor: '#EF506B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }} />
    <Stack.Screen
      name="ServiceDetail"
      component={ServiceDetail}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="AddService" component={AddService} />
    <Stack.Screen name="UpdateService" component={UpdateService} />
  </Stack.Navigator>
);

const Customer = () =>{
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Customer</Text>
      </View>
  );
}

const Transaction = () =>{
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Transaction</Text>
      </View>
  );
}

const Setting = () =>{
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Setting</Text>
      </View>
  );
}

const Main = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider
        style={styles.container}
        customStyles={{ backdrop: styles.backdrop }}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} options={{
            tabBarActiveTintColor: '#EF506B',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Customer" component={Customer} options={{
            tabBarActiveTintColor: '#EF506B',
            tabBarLabel: 'Customer',
            tabBarIcon: ({ color }) => (
              <Icon name="people" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Transaction" component={Transaction} options={{
            tabBarActiveTintColor: '#EF506B',
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ color }) => (
              <Icon name="cash" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Settings" component={Setting} options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon name="settings" color={color} size={26} />
            ),
          }} />
        </Tab.Navigator>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Main;
