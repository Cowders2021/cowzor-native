import React, { useContext, useEffect } from "react";
import { createContext, useReducer } from "react"
import { weatherReducer } from "./reducers/WeatherReducer"
import { WeatherActionTypes } from "./actions/WeatherActions";
import { Spinner } from "../components/Spinner";
import { WeatherAPI } from "../api/weather/weatherApi";
import { IWeather } from "../api/weather/weather.interface";

export type WeatherState = {
  weather: IWeather | null
  loading: boolean;
  error: string | null;
}

interface IWeatherContext {
  weatherState: WeatherState;
}

const initialWeatherState: IWeatherContext = {
  weatherState: {
    weather: null,
    loading: false,
    error: null,
  } as WeatherState
};

const WeatherStore: React.FC = (props) => {
  const [weatherState, dispatch] = useReducer(weatherReducer, initialWeatherState.weatherState)

  useEffect(() => {
    getWeather();
  }, [])

  const getWeather = async () => {
    setIsLoading(true);
    try {
      const weather = await WeatherAPI.get();
      dispatch({
        type: WeatherActionTypes.SetWeather,
        payload: weather
      });
      // Simple timeout just for show off our fancy spinner while loading data!
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    } catch (error) {
      setIsLoading(false);
    }
  }

  const setIsLoading = (isLoading: boolean) => {
    dispatch({
      type: WeatherActionTypes.SetLoading,
      payload: isLoading
    })
  }

  return (
    <WeatherContext.Provider value={{ weatherState }}>
      {weatherState.loading ? <Spinner /> : props.children}
    </WeatherContext.Provider>
  )
}

export const WeatherContext = createContext<IWeatherContext>(initialWeatherState);

export default WeatherStore;

export const useWeatherContext = () => {
  return useContext(WeatherContext);
}