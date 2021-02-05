import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Link } from "react-router-native";
import FkaCard from "./Card";

type IconName = 'camera' | 'weather' | 'profile' | 'logout' | 'weed' | 'cow' | 'dashboard';
interface Props {
    label: string;
    iconName: IconName;
    onPressUrl: string
}

const propsToAssets: Record<IconName, any> = {
    camera: require('../assets/camera.png'),
    logout: require('../assets/exit.png'),
    profile: require('../assets/tractor.png'),
    weather: require('../assets/weather/001-sun.png'),
    weed: require('../assets/farming/097-Weed.png'),
    cow: require('../assets/farming/cow.png'),
    dashboard: require('../assets/speedometer.png')
};

const NavigationItem = (props: Props) => {
    return (
        <View style={styles.box}>
            <Link to={props.onPressUrl}>
                <FkaCard>
                    <View style={styles.boxInnerContainer}>
                        <Image source={propsToAssets[props.iconName]} style={styles.icon} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </FkaCard>
            </Link>
        </View>
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