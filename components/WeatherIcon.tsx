import React from 'react';
import { Image, StyleSheet } from 'react-native';

const WeatherIcon = (type: string) => {
    switch (type) {
        case 'Clear':
            return <Image source={require('../assets/weather/001-sun.png')} style={styles.size} />
        case 'Snow':
            return <Image source={require('../assets/weather/005-snow.png')} style={styles.size} />
        case 'Clouds':
            return <Image source={require('../assets/weather/003-overcast.png')} style={styles.size} />
        default:
            return <Image source={require('../assets/weather/001-sun.png')} style={styles.size} />
    }
}

const styles = StyleSheet.create({
    size: {
        width: 40,
        resizeMode: 'contain',
        height: 40
    }
})

export default WeatherIcon;