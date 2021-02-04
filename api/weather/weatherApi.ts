import { get } from "./config";
import { IWeather } from "./weather.interface";

export const WeatherAPI = {
    get: async () => await (await get('forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')).data as IWeather
}