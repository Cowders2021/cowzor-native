import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { SensorAPI } from "../api/sensor/sensor.api"
import { ISensor } from "../api/sensor/sensor.interface"
import { Spinner } from "../components/Spinner"
import { SensorActionTypes } from "./actions/SensorAction"
import { sensorReducer } from "./reducers/SensorReducer"

export type SensorState = {
    sensors: ISensor[]
}

interface ISensorContext {
    sensorState: SensorState
}

const initialSensorState: ISensorContext = {
    sensorState: {
        sensors: []
    },
}


const SensorStore: React.FC = (props) => {
    const [sensorState, dispatch] = useReducer(sensorReducer, initialSensorState.sensorState);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    return (
        <SensorContext.Provider value={{ sensorState, dispatch }}>
            {props.children}
        </SensorContext.Provider>
    )
}
export const SensorContext = createContext<any>(initialSensorState)
export default SensorStore;

export const useSensorContext = () => {
    return useContext(SensorContext);
}