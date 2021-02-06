import { httpClient } from "../config";
import { IAnalyzer } from "./analyzer.interface";

const client = httpClient('https://apim-cowders.azure-api.net', {
    "Content-Type": "application/octet-stream",
    "Ocp-Apim-Subscription-Key": "6d4fc312ee364cae95701184b7cfe22e",
    "user": '121'
});

export const AnalyzerAPI = {
    post: async (base64EncodedImage: string) => await (await client.post('/analyzecolors', { data: base64EncodedImage })).data as IAnalyzer[]
}