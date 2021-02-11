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


const fields = [
    {
        name: 'Kornåker',
        id: 121
    },
    {
        name: 'Rabs',
        id: 122
    },
    {
        name: 'Potetåker',
        id: 123
    },
    {
        name: 'Myra',
        id: 124,
    },
    {
        name: 'Litt av hvert',
        id: 125
    }
]

const SensorStore: React.FC = (props) => {
    const [sensorState, dispatch] = useReducer(sensorReducer, initialSensorState.sensorState);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchInterval(5);
    }, [])

    const fetchInterval = (minute: number) => {
        fetchSensorData(minute, true);
        setInterval(() => {
            fetchSensorData(minute, false)
        }, 10000)
    }


    const fetchSensorData = async (minute: number, showLoading: boolean) => {
        if (showLoading) {
            setIsLoading(true);
        }
        try {
            const sensors = await SensorAPI.getAll(minute);
            const index = sensors.length;
            updateSensor(sensors[index - 1]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
        }
    }

    const updateSensor = (sensor: ISensor) => {
        console.log('a', sensor);
        const oldSensor = sensorState.sensors.find((s: ISensor) => s.id === sensor.id);
        if (oldSensor) {
            dispatch({
                type: SensorActionTypes.UpdateSensor,
                payload: updateSensorData(sensor, oldSensor)
            })
        } else {
            dispatch({
                type: SensorActionTypes.SetSenor,
                payload: {
                    ...sensor,
                    name: fields.find((field) => field.id == sensor.id)?.name
                }
            })
        }
    }

    const updateSensorData = (newSensor: ISensor, oldSensor: ISensor) => {
        const name =  fields.find((field) => field.id == newSensor.id)?.name
        return {
            ...oldSensor,
            soil: newSensor.soil ? newSensor.soil : oldSensor.soil,
            temperature: newSensor.temperature ? newSensor.temperature : oldSensor.temperature,
            humidity: newSensor.humidity ? newSensor.humidity : oldSensor.humidity,
            name: name
        }
    }

    return (
        <SensorContext.Provider value={{ sensorState }}>
            {props.children}
        </SensorContext.Provider>
    )
}
export const SensorContext = createContext<ISensorContext>(initialSensorState)
export default SensorStore;

export const useSensorContext = () => {
    return useContext(SensorContext);
}