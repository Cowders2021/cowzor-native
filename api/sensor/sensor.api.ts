import { httpClient } from "../config";
import { ISensor } from "./sensor.interface";

const client = httpClient('https://cowderspictures.azurewebsites.net/api')

export const SensorAPI = {
    get: async (id: number) => await (await client.get(`/sensor/${id}`)).data as ISensor,
    getAll: async (minute: number) => await (await client.get(`/sensors/${minute}`)).data as ISensor[],
}