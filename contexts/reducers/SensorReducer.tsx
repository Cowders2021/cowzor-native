import { SensorActions, SensorActionTypes } from "../actions/SensorAction";
import { SensorState } from "../SensorContext";

export const sensorReducer = (state: SensorState, action: SensorActions): any => {
    switch (action.type) {
        case SensorActionTypes.SetSenor:
            return {
                ...state,
                sensors: [...state.sensors, action.payload]
            }
        case SensorActionTypes.UpdateSensor:
            return {
                ...state,
                sensors: [...state.sensors, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}