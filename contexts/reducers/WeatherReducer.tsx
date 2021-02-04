import { WeatherActions, WeatherActionTypes } from "../actions/WeatherActions";
import { WeatherState } from "../WeatherContext";

export const weatherReducer = (state: WeatherState, action: WeatherActions): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.SetWeather:
      return {
        ...state,
        weather: action.payload
      };
    case WeatherActionTypes.SetLoading:
      return {
        ...state,
        loading: action.payload
      };
    case WeatherActionTypes.SetError:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      }
  }
}
