import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FkaButton from '../components/Button';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Velkommen til Cowzor</Text>
            <FkaButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Home;