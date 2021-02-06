import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import NavigationItem from "../components/NavigationItem";
import FkaContainer from "../components/ui/FkaContainer";
import FkaHeadline from "../components/ui/FkaHeadline";

const Menu = () => {
    return (
        <FkaContainer>
            <FkaHeadline>Hei Ola!</FkaHeadline>
            <Text style={styles.text}>Velkommen tilbake! Hva ønsker du å gjøre i dag?</Text>
            <View style={styles.menuContainer}>
                <NavigationItem label="Dashboard" iconName="dashboard" onPressUrl="/dashboard" />
                <NavigationItem label="Værmelding" iconName="weather" onPressUrl="/weather" />
                <NavigationItem label="Vekstkontroll" iconName="radish" onPressUrl="/camera" />
                <NavigationItem label="Mine jorder" iconName="weed" onPressUrl="/fields" />
                <NavigationItem label="Cownter" iconName="cow" onPressUrl="/counter" />
                <NavigationItem label="Logg ut" iconName="logout" onPressUrl="/" />
            </View>
        </FkaContainer>
    )
}

const styles = StyleSheet.create({
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

export default Menu;