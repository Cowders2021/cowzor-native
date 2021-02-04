import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { IWeather, List } from '../api/weather/weather.interface';
import Container from '../components/Container';
import WeatherRow, { IWeatherRow } from '../components/WeatherRow';
import WeatherTodayCard from '../components/WeatherTodayCard';
import { useWeatherContext } from '../contexts/WeatherContext';

const Weather = () => {
    const { weatherState } = useWeatherContext();

    const mapListItemToWeatherRow = (item: List): IWeatherRow => ({
        main: item.weather ? item.weather[0].main : '',
        temp: item.main.temp,
        humidity: item.main.humidity,
        wind: item.wind.speed,
        date: item.dt_txt
    })

    const mapToWeatherToday = (weather: IWeather) => ({
        temp: weather.list[0].main.temp,
        type: weather.list[0].weather[0].main || ''
    })

    return (
        <Container>
            <Text style={styles.headline}>I dag</Text>
            {
                weatherState.weather && (
                    <WeatherTodayCard {...mapToWeatherToday(weatherState.weather)}></WeatherTodayCard>

                )
            }
            <Text style={styles.headline}>Værvarsel</Text>
            <FlatList
                data={weatherState.weather?.list}
                keyExtractor={(item) => item.dt.toString()}
                renderItem={({ item, index }) => (<WeatherRow  {...mapListItemToWeatherRow(item)} key={`weather-row--${index}`} />)}>
            </FlatList>
        </Container>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '700',
    }
});


export default Weather;