export enum WeatherActionTypes {
  SetWeather = 'SET_WEATHER',
  SetError  = 'SET_ERROR',
  SetLoading = 'SET_LOADING'
}

type SetWeather = {
  readonly type: WeatherActionTypes.SetWeather,
  readonly payload: any
}

type SetError = {
  readonly type: WeatherActionTypes.SetError,
  readonly payload: string | null,
}

type SetLoading = {
  readonly type: WeatherActionTypes.SetLoading,
  readonly payload: boolean,
}

export type WeatherActions = SetWeather | SetError | SetLoading;
