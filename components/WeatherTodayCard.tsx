import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FkaCard from './ui/FkaCard';
import WeatherIcon from './WeatherIcon';

interface WeatherTodayCard {
    temp: number;
    type: string
}

const WeatherTodayCard = (props: WeatherTodayCard) => {
    return (
        <View style={styles.spaceBottom}>
            <FkaCard>
                <View style={styles.container}>
                    <Text style={styles.temperature}>{Math.floor(props.temp - 273)} {'\u00b0'}</Text>
                    <View>
                        <View>{WeatherIcon(props.type)}</View>
                    </View>
                </View>
            </FkaCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        minHeight: 150
    },
    temperature: {
        fontSize: 50
    },
    spaceBottom: {
        marginBottom: 30
    }
});

export default WeatherTodayCard;