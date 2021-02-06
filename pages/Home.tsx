import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Container from "../components/ui/Container";
import NavigationItem from "../components/NavigationItem";

const Home = () => {
    return (
        <Container>
            <Text style={styles.headline}>Hei Ola!</Text>
            <Text style={styles.text}>Velkommen tilbake! Hva ønsker du å gjøre i dag?</Text>
            <View style={styles.menuContainer}>
                <NavigationItem label="Dashboard" iconName="dashboard" onPressUrl="/dashboard" />
                <NavigationItem label="Værmelding" iconName="weather" onPressUrl="/weather" />
                <NavigationItem label="Kamera" iconName="camera" onPressUrl="/camera" />
                <NavigationItem label="Mine jorder" iconName="weed" onPressUrl="/fields" />
                <NavigationItem label="Cownter" iconName="cow" onPressUrl="/counter" />
                <NavigationItem label="Logg ut" iconName="logout" onPressUrl="/" />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 35,
        fontWeight: '700',
        marginBottom: 10
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 18,
        marginBottom: 30
    }
});

export default Home;