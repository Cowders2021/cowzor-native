import { httpClient } from "../config";

const client = httpClient('https://samples.openweathermap.org/data/2.5/')

export const SensorAPI = {
    get: async () => await (await client.get('forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')).data as any
}