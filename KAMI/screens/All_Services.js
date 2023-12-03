import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Text, FlatList, Image} from "react-native";

const Services =()=>{
    const [isLoading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    const getServices = async () => {
        try {
            const response = await fetch('https://kami-backend-5rs0.onrender.com/services');
            const json = await response.json();
            setServices(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getServices();
    }, []);

    return (
        <View style={{flex: 1, padding: 24, backgroundColor: '#ffffff'}}>
            <Image source={require('./images/kami.png')} style={styles.image}></Image>
            <View>
                <Text>Danh sách dịch vụ</Text>
            </View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
            <FlatList
                data={services}
                keyExtractor={({_id}) =>_id}
                renderItem={({item}) => (
                    <View style={styles.services}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}đ</Text>
                    </View>
                
                )}
            />
            )}
        </View>
    
    );

}

export default Services;
const styles = StyleSheet.create({
    services : {
        flexDirection: 'row',
        flex: 1,
        borderColor: '#9D9D9D',
        borderWidth: 0.5,
        marginVertical: 4,
        paddingVertical: 16,
        paddingHorizontal:10,
        borderRadius: 10
    },
    name: {
        color: '#070707',
        fontWeight: '500',
        fontSize: 18,
        flex: 0.8
    },
    price: {
        color: '#2E2E2E',
        flex: 0.2,
        textAlign: 'right',
        fontSize: 16
    },
    image: {
        marginLeft: auto,
        marginRight: auto,
    }
});