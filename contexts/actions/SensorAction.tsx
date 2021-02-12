import { ISensor } from "../../api/sensor/sensor.interface";

export enum SensorActionTypes {
    SetSenor = "SET_SENSOR",
    UpdateSensor = "UPDATE_SENSOR"
}

type SetSensor = {
    readonly type: SensorActionTypes.SetSenor,
    readonly payload: any
}

type UpdateSensor = {
    readonly type: SensorActionTypes.UpdateSensor,
    readonly payload: ISensor[]
}

export type SensorActions = SetSensor | UpdateSensor;