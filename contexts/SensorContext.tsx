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

    const [sens, setSens] = useState<any[]>([])

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
        const exist = sens.some((s: ISensor) => s.id === sensor.id);

        console.log('exist', exist);
        
        if (exist) {
            const oldSensor = sens.find((s: ISensor) => s.id === sensor.id);
            // console.log('UPDATE-----', oldSensor)
            const res = updateSensorData(sensor, oldSensor);
            dispatch({
                type: SensorActionTypes.UpdateSensor,
                payload: res
            })
        } else {
            if (sensor) {
                // console.log('SET-----', sensor)
                setSens([...sens, sensor])
                dispatch({
                    type: SensorActionTypes.SetSenor,
                    payload: {
                        ...sensor,
                        name: fields.find((field) => field.id == sensor.id)?.name
                    }
                })
            }
        }
    }

    const updateSensorData = (newSensor: ISensor, oldSensor: ISensor): ISensor[] => {
        const name =  fields.find((field) => field.id == newSensor.id)?.name;
        const filter = sensorState.sensors.filter((s: ISensor) => s.id !== newSensor.id);
        console.log('FILTER', filter);
        const updatedSensorData = {
            ...oldSensor,
            soil: newSensor.soil ? newSensor.soil : oldSensor.soil,
            temperature: newSensor.temperature ? newSensor.temperature : oldSensor.temperature,
            humidity: newSensor.humidity ? newSensor.humidity : oldSensor.humidity,
            name: name
        }

        const res = [...filter, updatedSensorData]
        return res;
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