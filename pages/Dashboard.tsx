import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SensorAPI } from '../api/sensor/sensor.api';
import { ISensor } from '../api/sensor/sensor.interface';
import { IWeather } from '../api/weather/weather.interface';
import { Spinner } from '../components/Spinner';
import FkaCard from '../components/ui/FkaCard';
import FkaContainer from "../components/ui/FkaContainer";
import FkaHeadline from '../components/ui/FkaHeadline';
import FkaLabel from '../components/ui/FkaLabel';
import FkaPadding from '../components/ui/FkaPadding';
import FkaSpaceBottom from '../components/ui/FkaSpaceBottom';
import WeatherTodayCard from '../components/WeatherTodayCard';
import { useWeatherContext } from '../contexts/WeatherContext';
import { FKA_PRIMARY } from '../styles/Colors';

const fields = [
    {
        name: 'Kornåker',
        id: 121
    },
    {
        name: 'Rabs',
        id: 122
    },
    {
        name: 'Potetåker',
        id: 123
    },
    {
        name: 'Myra',
        id: 124,
    },
    {
        name: 'Litt av hvert',
        id: 125
    }
]

const Dashboard = () => {
    const { weatherState } = useWeatherContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sensors, setSensors] = useState<any>([])

    useEffect(() => {
        fetchInterval(1);
    }, [])

    const fetchInterval = (minute: number) => {
        fetchSensorData(minute, true);
        setInterval(() => {
            fetchSensorData(minute, false)
        }, 10000)
    }

    const fetchSensorData = async (minute: number, showLoading: boolean) => {
        if (showLoading) {
            setIsLoading(true);
        }
        try {
            const sensors = await SensorAPI.getAll(minute);
            console.log(filterSensors(sensors));
            setSensors(filterSensors(sensors));
            setIsLoading(false);
        } catch (error) {
            console.log('error', error)
            setIsLoading(false)
        }
    }

    const filterSensors = (sensors: ISensor[]) => {
        return sensors.map((sensor) => {
            const field = fields.find((field) => field.id == sensor.id);
            return {
                ...field,
                sensor
            }
        })
    }

    const mapToWeatherToday = (weather: IWeather) => ({
        temp: weather.list[0].main.temp,
        type: weather.list[0].weather[0].main || ''
    })

    return (
        <>
            {
                isLoading && (
                    <Spinner />
                )
            }
            {
                !isLoading && (
                    <ScrollView>
                        <FkaContainer>
                            <FkaSpaceBottom>
                                <FkaHeadline size="medium">Været i dag</FkaHeadline>
                                {
                                    weatherState.weather && (
                                        <WeatherTodayCard {...mapToWeatherToday(weatherState.weather)}></WeatherTodayCard>
                                    )
                                }

                            </FkaSpaceBottom>
                            <FkaHeadline size="medium">Mine åkere</FkaHeadline>
                            {
                                sensors.map((sensor: any, index: number) => (
                                    <FkaSpaceBottom key={`field-row--${index}`}>
                                        <FkaCard>
                                            <FkaPadding>
                                                <View style={styles.row}>
                                                    <FkaHeadline size="medium">{sensor.name}</FkaHeadline>
                                                    <Text style={styles.date}>{sensor.sensor.eventEnqueuedUtcTime}</Text>
                                                </View>
                                                <View style={styles.fieldRow}>
                                                    <View>
                                                        <FkaLabel>Temp</FkaLabel>
                                                        <Text>{sensor.sensor.temperature}</Text>
                                                    </View>
                                                    <View>
                                                        <FkaLabel>Soil</FkaLabel>
                                                        <Text>{sensor.sensor.soil}</Text>
                                                    </View>
                                                    <View>
                                                        <FkaLabel>Fuktighet</FkaLabel>
                                                        <Text>{sensor.sensor.humidity}</Text>
                                                    </View>
                                                </View>
                                            </FkaPadding>
                                        </FkaCard>
                                    </FkaSpaceBottom>
                                ))
                            }

                        </FkaContainer >
                    </ScrollView>
                )
            }

        </>
    )
}

const styles = StyleSheet.create({
    fieldRow: {
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
    spaceBottom: {
        marginBottom: 10
    },
    iconContainer: {
        width: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Dashboard;