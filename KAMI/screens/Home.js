import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Services from './All_Services';

const Tab = createBottomTabNavigator();

const Transaction = () =>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Transaction</Text>
        </View>
    );
}

const Customer = () =>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Customer</Text>
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

const BottomTabs =() => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Services} 
                options={{
                tabBarActiveTintColor: '#EF506B',
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size }) => (
                    <Icons name="home" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Transaction" component={Transaction}
                options={{
                    tabBarActiveTintColor: '#EF506B',
                    tabBarLabel: 'Transaction',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="money-bill" color={color} size={size} />
                    ),
            }}/>
            <Tab.Screen name="Customer" component={Customer}
                options={{
                    tabBarActiveTintColor: '#EF506B',
                    tabBarLabel: 'Customer',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="people-outline" color={color} size={size} />
                    ),
            }}/>
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarActiveTintColor: '#EF506B',
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="settings-outline" color={color} size={size} />
                    ),
            }}/>
        </Tab.Navigator>
    );
}

export default BottomTabs;