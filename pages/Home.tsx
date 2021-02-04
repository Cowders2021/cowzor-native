import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useHistory } from "react-router-native";
import FkaButton from "../components/Button";

const Home = () => {
    const history = useHistory();
    const onLogoutButtonClick = () => {
        history.push('/');
    }

    const navigateToWeatherPage = () => history.push('/weather')
    const navigateToCameraPage = () => history.push('/camera')

    return (
        <View style={styles.container}>
            <Text>Velkommen til Cowzor</Text>
            <FkaButton label="Logout" onClick={onLogoutButtonClick}></FkaButton>
            <FkaButton label="Gå til vær data" onClick={navigateToWeatherPage}></FkaButton>
            <FkaButton label="Gå til kamera" onClick={navigateToCameraPage}></FkaButton>
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