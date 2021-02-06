import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Link } from "react-router-native";
import FkaCard from "./ui/FkaCard";

type IconName = 'radish' | 'weather' | 'profile' | 'logout' | 'weed' | 'cow' | 'dashboard';
interface Props {
    label: string;
    iconName: IconName;
    onPressUrl: string
}

const propsToAssets: Record<IconName, any> = {
    radish: require('../assets/farming/025-radish.png'),
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
    }
});
export default NavigationItem;