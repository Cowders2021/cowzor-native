import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useHistory } from "react-router-native";
import FkaButton from "../components/Button";

const Home = () => {
    const history = useHistory();
    const onLogoutButtonClick = () => {
        history.push('/');
    }

    return (
        <View style={styles.container}>
            <Text>Velkommen til Cowzor</Text>
            <Text>hello</Text>
            <FkaButton label="Logout" onClick={onLogoutButtonClick}></FkaButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Home;