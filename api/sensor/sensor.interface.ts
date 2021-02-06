export interface ISensor {
    id: number;
    timestamp: string;
    eventEnqueuedUtcTime: string;
    humidity: number;
    temperature: number;
    soil: number;
    idstring: string;
    ip: string;
}
