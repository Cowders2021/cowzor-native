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
    readonly payload: any
}

export type SensorActions = SetSensor | UpdateSensor;