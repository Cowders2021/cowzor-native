import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FKA_PRIMARY } from '../styles/Colors';
import FkaCard from './Card';
import SpaceBottom from './SpaceBottom';
import WeatherIcon from './WeatherIcon';

export interface IWeatherRow {
    main: string;
    temp: number;
    wind: number;
    humidity: number;
    date: string
}

const WeatherRow = (props: IWeatherRow) => {
    return (
        <SpaceBottom>
            <FkaCard>
                <View>
                    <Text style={styles.date}>{props.date}</Text>
                    <View style={styles.weatherRow}>
                        <View style={styles.iconContainer}>
                            <View>{WeatherIcon(props.main)}</View>
                        </View>
                        <View>
                            <Text style={styles.label}>Temp</Text>
                            <Text>{Math.floor(props.temp - 273)}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Vind</Text>
                            <Text>{props.wind}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Fuktighet</Text>
                            <Text>{props.humidity} %</Text>
                        </View>
                    </View>
                </View>
            </FkaCard>
        </SpaceBottom>
    )
}

const styles = StyleSheet.create({
    spaceBottom: {
        marginBottom: 10
    },
    iconContainer: {
        width: 10
    },
    weatherRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    date: {
        marginTop: 10,
        color: FKA_PRIMARY,
        fontWeight: '700',
        paddingLeft: 10,
    },
    label: {
        fontWeight: '700',
        fontSize: 11,
        textTransform: 'uppercase'
    }
})
export default WeatherRow;