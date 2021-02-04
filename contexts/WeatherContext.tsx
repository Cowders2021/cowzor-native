import React, { useContext, useEffect } from "react";
import { createContext, useReducer } from "react"
import { weatherReducer } from "./reducers/WeatherReducer"
import { WeatherActionTypes } from "./actions/WeatherActions";
import { Spinner } from "../components/Spinner";

export type WeatherState = {
  weather: any;
  loading: boolean;
  error: string | null;
}

interface IWeatherContext {
  weatherState: WeatherState;
}

const initialWeatherState: IWeatherContext = {
  weatherState: {
    weather: null,
    loading: true,
    error: null,
  } as WeatherState
};

const WeatherStore: React.FC = (props) => {
  const [weatherState, dispatch] = useReducer(weatherReducer, initialWeatherState.weatherState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: WeatherActionTypes.SetLoading,
        payload: false
      })
    }, 5000)
  }, [])  

  return (
    <WeatherContext.Provider value={{weatherState}}>
      {weatherState.loading ? <Spinner/> :  props.children}
    </WeatherContext.Provider>
  )
}

export const WeatherContext = createContext<IWeatherContext>(initialWeatherState);

export default WeatherStore;

export const useWeatherContext = () => {
  return useContext(WeatherContext);
}