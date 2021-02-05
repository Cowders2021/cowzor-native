import React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
import { useHistory } from "react-router-native";
import FkaCard from "./Card";

interface Props {
    label: string;
    iconName: 'camera' | 'weather' | 'profile' | 'logout';
    onPressUrl: string
}

const NavigationItem = (props: Props) => {

    const history = useHistory();
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'camera':
                return <Image source={require('../assets/camera.png')} style={styles.icon} />
            case 'weather':
                return <Image source={require('../assets/weather/001-sun.png')} style={styles.icon} />
            case 'profile':
                return <Image source={require('../assets/tractor.png')} style={styles.icon} />
            case 'logout':
                return <Image source={require('../assets/exit.png')} style={styles.icon} />
            default:
                return <View></View>
        }
    }

    const navigateTo = (url: string) => history.push(url)

    return (
        <TouchableHighlight style={styles.box} onPress={() => navigateTo(props.iconName)}>
            <View>
                <FkaCard>
                    <View style={styles.boxInnerContainer}>
                        <View>{getIcon(props.iconName)}</View>
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </FkaCard>
            </View>
        </TouchableHighlight>
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
    box: {
        width: '49%',
        height: 100,
        marginBottom: 22
    },
    boxInnerContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10
    },
    icon: {
        width: 60,
        height: 60
    },
    label: {
        marginTop: 10
    },
    text: {
        fontSize: 18,
        marginBottom: 30
    }
});
export default NavigationItem;